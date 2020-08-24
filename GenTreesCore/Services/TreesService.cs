﻿using GenTreesCore.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenTreesCore.Services
{
    public class TreesService
    {
        private ApplicationContext db;

        public TreesService(ApplicationContext db)
        {
            this.db = db;
        }

        public List<GenTree> GetUserGenTrees(int userId)
        {
            return db.GenTrees
                .Where(tree => tree.Owner.Id == userId)
                .ToList();
        }

        public List<GenTree> GetPublicTrees()
        {
            return db.GenTrees
                .Include(t => t.Owner)
                .Where(tree => !tree.IsPrivate)
                .ToList();
        }

        public GenTree GetGenTree(int treeId)
        {
            return db.GenTrees
                .Include(t => t.Owner)
                .Include(t => t.Persons)
                    .ThenInclude(p => p.CustomDescriptions)
                .Include(t => t.CustomPersonDescriptionTemplates)
                .Include(t => t.Persons)
                    .ThenInclude(p => p.BirthDate)
                .Include(t => t.Persons)
                    .ThenInclude(p => p.DeathDate)
                .Include(t => t.Persons)
                    .ThenInclude(p => p.Relations)
                .Include(t => t.GenTreeDateTimeSetting)
                    .ThenInclude(s => s.Eras)
                .Where(t => t.Id == treeId)
                .FirstOrDefault();
        }

        public void AddGenTree(int userId, string name, bool isPrivate)
        {
            var owner = db.Users.FirstOrDefault(u => u.Id == userId);
            db.GenTrees.Add(new GenTree
            {
                Name = name,
                IsPrivate = isPrivate,
                DateCreated = DateTime.Now,
                LastUpdated = DateTime.Now,
                Owner = owner
            });
            db.SaveChanges();
        }
    }
}
