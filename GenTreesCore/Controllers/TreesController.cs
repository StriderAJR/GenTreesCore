using System.Linq;
using GenTreesCore.Entities;
using Microsoft.AspNetCore.Mvc;
using GenTreesCore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.ClearScript;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Text.Json;
using JsonSubTypes;

namespace GenTreesCore.Controllers
{
    public class TreesController : Controller
    {
        private ApplicationContext db;

        public TreesController(ApplicationContext context)
        {
            db = context;
        }

        public async System.Threading.Tasks.Task<IActionResult> AddTestDateTimeSetting()
        {
            var dateTimeSetting = Services.DbProvider.GetTestDateTimeSetting();
            db.GenTreeDateTimeSettings.Add(dateTimeSetting);
            await db.SaveChangesAsync();
            return RedirectToAction("Index", "Home");
        }

        public async System.Threading.Tasks.Task<IActionResult> AddTestGenTree()
        {
            var tree = GenTreesCore.Services.DbProvider.GetSimpleTestGenTree();
            tree.Owner = db.Users.FirstOrDefault(u => u.Login == "admin");
            tree.GenTreeDateTimeSetting = db.GenTreeDateTimeSettings.FirstOrDefault(t => true);
            db.GenTrees.Add(tree);
            await db.SaveChangesAsync();
            return RedirectToAction("Public", "Trees");
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
            var authorizedUserId = int.Parse(HttpContext.User.Identity.Name);
            //получаем список всех его деревьев
            var trees = db.GenTrees
                .Where(tree => tree.Owner.Id == authorizedUserId)
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

        [HttpGet("trees/gentree")]
        public IActionResult GetGenTree(int id)
        {
            int? authorizedUserId = null;
            if (HttpContext.User.Identity.IsAuthenticated)
                authorizedUserId = int.Parse(HttpContext.User.Identity.Name);

            var tree = db.GenTrees
                .Include(t => t.Persons)
                    .ThenInclude(p => p.CustomDescriptions)
                        .ThenInclude(p => p.Template)
                .Include(t => t.Persons)
                    .ThenInclude(p => p.Relations)
                .Include(t => t.GenTreeDateTimeSetting)
                .Include(t => t.CustomPersonDescriptionTemplates)
                .Where(t => t.Id == id && (!t.IsPrivate || t.Owner.Id == authorizedUserId))
                .Select(t => new GenTreeViewModel
                {
                    GenTree = t,
                    CanEdit = authorizedUserId != null && t.Owner.Id == authorizedUserId
                })
                .FirstOrDefault();

            if (tree == null)
                return Content($"no tree with id {id} found");

            return Ok(ToJson(tree));
        }

        private string ToJson(GenTreeViewModel tree)
        {
            var settings = new JsonSerializerSettings();
            settings.Converters.Add(JsonSubtypesConverterBuilder
                .Of(typeof(Relation), "Type")
                .RegisterSubtype(typeof(ChildRelation), "ChildRelation")
                .RegisterSubtype(typeof(SpouseRelation), "SpouseRelation")
                .SerializeDiscriminatorProperty()
                .Build());

            settings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;

            return JsonConvert.SerializeObject(tree, settings);
        }
    }
}
