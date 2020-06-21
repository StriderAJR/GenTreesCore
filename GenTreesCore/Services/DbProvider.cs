using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GenTreesCore.Entities;

namespace GenTreesCore.Services
{
    public class DbProvider
    {
        public static GenTree GetTestGenTree()
        {
            GenTree lotrGenTree = new GenTree();
            List<Person> result = new List<Person>();
            
            var turin = new Person
            {
                FirstName = "turin",
            };
            var lalaith = new Person
            {
                FirstName = "lalaith",
            };
            var nienor = new Person
            {
                FirstName = "nienor",
            };
            var morwen = new Person
            {
                FirstName = "morwen"
            };
            var hurin = new Person
            {
                FirstName = "hurin",
                Relations = new List<Relation>
                {
                    new SpouseRelation
                    {
                        TargetPerson = morwen
                    },
                    new ChildRelation
                    {
                        TargetPerson = turin
                    },
                    new ChildRelation
                    {
                        TargetPerson = lalaith
                    },
                    new ChildRelation
                    {
                        TargetPerson = nienor
                    }
                }
            };
            var baragund = new Person
            {
                FirstName = "baragund",
                Relations = new List<Relation>
                {
                    new ChildRelation
                    {
                        TargetPerson = morwen
                    }
                }
            };
            var belegund = new Person
            {
                FirstName = "belegund"
            };
            var bregolas = new Person
            {
                FirstName = "bregolas",
                Relations = new List<Relation>
                {
                    new ChildRelation
                    {
                        TargetPerson = baragund,
                    },
                    new ChildRelation
                    {
                        TargetPerson = belegund,
                    }
                }
            };

            var beren = new Person
            {
                FirstName = "beren",
            };

            var emeldir = new Person
            {
                FirstName = "emeldir",
                Relations = new List<Relation>
                {
                    new ChildRelation
                    {
                        TargetPerson = beren,
                    }
                }
            };
            var barahir = new Person
            {
                FirstName = "barahir",
                Relations = new List<Relation>
                {
                    new SpouseRelation
                    {
                        TargetPerson = emeldir,
                    },
                    new ChildRelation
                    {
                        TargetPerson = beren,
                    }
                }
            };

            var bregor = new Person
            {
                FirstName = "Bregor",
                Relations = new List<Relation>
                {
                    new ChildRelation
                    {
                        TargetPerson = bregolas,
                    },
                    new ChildRelation
                    {
                        TargetPerson = barahir,
                    }
                }
            };
            

            lotrGenTree.Persons = result;
            return lotrGenTree;
        }
    }
}
