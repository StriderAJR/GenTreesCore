using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GenTreesCore.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        public IActionResult Public()
        {
            var trees = db.GenTrees
                .Where(tree => !tree.IsPrivate)
                .ToList()
                .Select(tree => new GenTreeListItemViewModel
                {
                    Name = tree.Name,
                    Description = tree.Description,
                    OwnerId = tree.Owner.Id
                });

            return View(trees);
        }

        public IActionResult UserPublicTrees(int id)
        {
            //Получаем пользователя по его id
            var user = db.Users.Where(u => u.Id == id).FirstOrDefault();

            //если пользователь был найден, передаем данные в модель
            if (user != null)
            {
                //получаем список публичных деревьев пользователя
                var trees = db.GenTrees
                    .Where(tree => !tree.IsPrivate && tree.Owner.Id == id)
                    .ToList();
                //если список пустой выводим сообщение
                if (trees.Count == 0)
                    ModelState.AddModelError("PublicGenTrees", "У пользователя пока нет деревьев");

                //возвращаем модель с данными
                return View(new UserPublicInfo{Login = user.Login,PublicGenTrees = trees});
            }
            else
            {
                ModelState.AddModelError("Login", "Пользователя не существует");
                return View(new UserPublicInfo());
            } 
        }

        [Authorize]
        public IActionResult My()
        {
            var id = int.Parse(HttpContext.User.Identity.Name);

            //получаем список всех деревьев текущего пользователя
            var trees = db.GenTrees
                .Where(tree => tree.Owner.Id == id)
                .ToList();

            //если список пустой выводим сообщение
            if (trees.Count == 0)
                ModelState.AddModelError("PublicGenTrees", "У вас пока нет деревьев");

            //возвращаем модель с данными
            return View(trees
                .Select(tree => new GenTreeListItemViewModel
                {
                    Name = tree.Name,
                    Description = tree.Description,
                    OwnerId = tree.Owner.Id
                }));
        }
    }
}
