using System.Linq;
using GenTreesCore.Entities;
using Microsoft.AspNetCore.Mvc;
using GenTreesCore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace GenTreesCore.Controllers
{
    public class TreesController : Controller
    {
        private ApplicationContext db;

        public TreesController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet("trees/public")]
        public JsonResult GetPublicTreesList()
        {
            var trees = db.GenTrees
                .Where(tree => !tree.IsPrivate)
                .Select(tree => new GenTreeListItemViewModel
                {
                    Id = tree.Id,
                    Name = tree.Name,
                    Description = tree.Description,
                    Creator = tree.Owner.Login
                })
                .ToList();

            return Json(trees);
        }

        [Authorize]
        [HttpGet("trees/my")]
        public JsonResult GetMyTreesList()
        {
            //получаем id авторизованного пользователя
            var id = int.Parse(HttpContext.User.Identity.Name);
            //получаем список всех его деревьев
            var trees = db.GenTrees
                .Where(tree => tree.Owner.Id == id)
                .Select(tree => new GenTreeListItemViewModel
                {
                    Id = tree.Id,
                    Name = tree.Name,
                    Description = tree.Description,
                    Creator = tree.Owner.Login
                })
                .ToList();

            return Json(trees);
        }

        [HttpGet("trees/user")]
        public JsonResult GetUserPublicTrees(string login)
        {
            var trees = db.GenTrees
                .Where(tree => !tree.IsPrivate && tree.Owner.Login == login)
                .Select(tree => new GenTreeListItemViewModel
                {
                    Id = tree.Id,
                    Name = tree.Name,
                    Description = tree.Description,
                    Creator = tree.Owner.Login
                })
                .ToList();

            return Json(trees);
        }
    }
}
