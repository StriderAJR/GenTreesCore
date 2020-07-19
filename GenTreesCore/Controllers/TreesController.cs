using System.Linq;
using GenTreesCore.Entities;
using Microsoft.AspNetCore.Mvc;
using GenTreesCore.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using GenTreesCore.Services;
using System;

namespace GenTreesCore.Controllers
{
    public class TreesController : Controller
    {
        private TreesService treesService;

        public TreesController(ApplicationContext context)
        {
            treesService = new TreesService(context);
        }

        /*
        public async System.Threading.Tasks.Task<IActionResult> AddTestDateTimeSetting()
        {
            
            var dateTimeSetting = Services.DbProvider.GetTestDateTimeSetting();
            dateTimeSetting.Owner = db.Users.FirstOrDefault(u => u.Login == "admin");
            db.GenTreeDateTimeSettings.Add(dateTimeSetting);
            await db.SaveChangesAsync();
            return Ok();
        }

        public async System.Threading.Tasks.Task<IActionResult> AddTestGenTree()
        {
            var tree = GenTreesCore.Services.DbProvider.GetSimpleTestGenTree();
            tree.Owner = db.Users.FirstOrDefault(u => u.Login == "admin");
            var dateTimeSetting = db.GenTreeDateTimeSettings.FirstOrDefault();
            tree.GenTreeDateTimeSetting = dateTimeSetting;
            db.GenTrees.Add(tree);
            await db.SaveChangesAsync();
            return RedirectToAction("Public", "Trees");
        }

        public async System.Threading.Tasks.Task<IActionResult> AddTestDate()
        {
            var person = db.GenTrees.Include(t => t.Persons).FirstOrDefault().Persons.FirstOrDefault();
            var era = db.GenTreeDateTimeSettings.Include(d => d.Eras).FirstOrDefault().Eras.FirstOrDefault();
            person.BirthDate = new GenTreeDateTime
            {
                Era = era,
                Year = 1874,
                Month = 2,
                Day = 20
            };
            await db.SaveChangesAsync();
            return RedirectToAction("Public", "Trees");
        }
        */

        [HttpGet("trees/public")]
        public JsonResult GetPublicTreesList()
        {
            var trees = treesService.GetPublicTrees()
                .Select(tree => new GenTreeSimpleViewModel
                {
                    Id = tree.Id,
                    Name = tree.Name,
                    Description = ShortenDescription(tree.Description, 100),
                    Creator = tree.Owner.Login,
                    LastUpdated = tree.LastUpdated.ToString("d/MM/yyyy"),
                    Image = tree.Image
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
            var trees = treesService.GetUserGenTrees(authorizedUserId)
                .Select(tree => new MyTreeSimpleViewModel
                {
                    Id = tree.Id,
                    Name = tree.Name,
                    Description = ShortenDescription(tree.Description, 100),
                    DateCreated = tree.DateCreated.ToString("d/MM/yyyy"),
                    LastUpdated = tree.LastUpdated.ToString("d/MM/yyyy"),
                    Image = tree.Image
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

            var tree = treesService.GetGenTree(id);

            if (tree == null)
                return BadRequest($"no tree with id {id} found");
            if (tree.IsPrivate && tree.Owner.Id != authorizedUserId)
                return BadRequest("access denied");

            var treeModel = ToViewModel(tree);
            treeModel.CanEdit = tree.Owner.Id == authorizedUserId;

            return Ok(JsonConvert.SerializeObject(treeModel));
        }

        private GenTreeViewModel ToViewModel(GenTree tree)
        {
            var treeModel = new GenTreeViewModel
            {
                Id = tree.Id,
                Name = tree.Name,
                Description = tree.Description,
                Creator = tree.Owner.Login,
                DateCreated = tree.DateCreated.ToString("d/MM/yyyy"),
                LastUpdated = tree.LastUpdated.ToString("d/MM/yyyy"),
                Image = tree.Image,
                DescriptionTemplates = tree.CustomPersonDescriptionTemplates
            };

            if (tree.Persons != null)
                treeModel.Persons = tree.Persons.Select(p => ToViewModel(p)).ToList();

            return treeModel;
        }

        private PersonViewModel ToViewModel(Person person)
        {
            var personModel = new PersonViewModel
            {
                Id = person.Id,
                LastName = person.LastName,
                FirstName = person.FirstName,
                MiddleName = person.MiddleName,
                Gender = person.Gender,
                Biography = person.Biography,
                Image = person.Image,
                CustomDescriptions = person.CustomDescriptions
            };
            if (person.BirthDate != null)
            {
                personModel.BirthDate = person.BirthDate.ToDateTimeString();
                personModel.ShortBirthDate = person.BirthDate.ToShortDateTimeString();
            }
            if (person.DeathDate != null)
            {
                personModel.DeathDate = person.DeathDate.ToDateTimeString();
                personModel.ShortDeathDate = person.DeathDate.ToShortDateTimeString();
            }

            if (person.Relations != null)
                personModel.Relations = person.Relations.Select(r => ToViewModel(r)).ToList();
            return personModel;
        }

        private RelationViewModel ToViewModel(Relation relation)
        {
            if (relation is ChildRelation)
                return ToViewModel(relation as ChildRelation);
            else
                return ToViewModel(relation as SpouseRelation);
        }
        private ChildRelationViewModel ToViewModel(ChildRelation relation)
        {
            var childRelationModel = new ChildRelationViewModel
            {
                Id = relation.Id,
                TargetPersonId = relation.TargetPerson.Id,
                SecondParentId = null,
                RelationRate = relation.RelationRate.ToString(),
                RelationType = "ChildRelation"
            };
            if (relation.SecondParent != null)
                childRelationModel.SecondParentId = relation.SecondParent.Id;
            return childRelationModel;
        }

        private SpouseRelationViewModel ToViewModel(SpouseRelation relation)
        {
            return new SpouseRelationViewModel
            {
                Id = relation.Id,
                TargetPersonId = relation.TargetPerson.Id,
                IsFinished = relation.IsFinished,
                RelationType = "SpouseRelation"
            };
        }

        private string ShortenDescription(string description, int length)
        {
            if (description == null)
                return null;

            return description.Substring(0, Math.Min(length, description.Length));
        }
    }
}