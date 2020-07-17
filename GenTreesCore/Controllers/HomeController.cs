using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GenTreesCore.Models;
using GenTreesCore.Services;

namespace GenTreesCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PublicTrees()
        {
            return View();
        }

        public IActionResult MyTrees()
        {
            return View();
        }

        public JsonResult GetTestGenTree()
        {
            return new JsonResult(DbProvider.GetTestGenTree());
        }

        public JsonResult GetSimpleTestGenTree()
        {
            return new JsonResult(DbProvider.GetSimpleTestGenTree());
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult TestTree()
        {
            return View();
        }

        public JsonResult GetTestTree()
        {
            var genTree = DbProvider.GetTestGenTree();
            return new JsonResult(genTree);
        }
    }
}
