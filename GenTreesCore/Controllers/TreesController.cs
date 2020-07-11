using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GenTreesCore.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GenTreesCore.Models;

namespace GenTreesCore.Controllers
{
    public class TreesController : Controller
    {
        private ApplicationContext db;

        public TreesController(ApplicationContext context)
        {
            db = context;
        }

        public IActionResult PublicTrees()
        {
            var trees = db.GenTrees
                .Where(tree => !tree.IsPrivate)
                .ToList()
                .Select(tree => new GenTreeListItemViewModel
                {
                    Name = tree.Name,
                    Description = tree.Description,
                });

            return View(trees);
        }
    }
}
