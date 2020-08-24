using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GenTreesCore.Models;
using GenTreesCore.Services;
using Microsoft.AspNetCore.Authorization;

namespace GenTreesCore.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index() => View();
        public IActionResult PublicTrees() => View();

        [Authorize]
        public IActionResult MyTrees() => View();

        public IActionResult TestTree() => View();

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

        public JsonResult GetTestTree()
        {
            var genTree = DbProvider.GetTestGenTree();
            return new JsonResult(genTree);
        }
    }
}
