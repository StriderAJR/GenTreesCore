using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GenTreesCore.Entities;

namespace GenTreesCore.Services
{
    public class DbProvider
    {
        public static GenTree GetSimpleTestGenTree()
        {
            var eyesColorTemplate = new CustomPersonDescriptionTemplate { Name = "Eyes color" };
            GenTree simpleTree = new GenTree
            {
                Name = "FamilyTree",
                Description = "A simple test tree",
                CustomPersonDescriptionTemplates = new List<CustomPersonDescriptionTemplate>() { eyesColorTemplate }
            };

            var mother = new Person { FirstName = "Tmia", LastName = "Shevik" };
            var father = new Person { FirstName = "Hovard", LastName = "Dored" };
            var child = new Person
            {
                FirstName = "Millia",
                LastName = "Shevido",
                CustomDescriptions = new List<CustomPersonDescription>()
            {
                new CustomPersonDescription{ Template = eyesColorTemplate, Value = "brown"}
            }
            };
            mother.Relations = new List<Relation>() { new SpouseRelation { TargetPerson = father } };
            father.Relations = new List<Relation>()
            {
                new ChildRelation {TargetPerson = child, SecondParent = mother, RelationRate = RelationRate.BloodRelative}
            };

            simpleTree.Persons = new List<Person>() { mother, father, child };

            return simpleTree;

        }

        public static GenTreeDateTimeSetting GetTestDateTimeSetting()
        {
            return new GenTreeDateTimeSetting
            {
                Name = "Parallel World Calendar",
                Eras = new List<GenTreeEra>()
                {
                    new GenTreeEra { Name = "Cold Era", ShortName = "cd.", ThroughBeginYear = 1, YearCount = 2000 },
                    new GenTreeEra { Name = "Ocean Era", ShortName = "oc.", ThroughBeginYear = 1001, YearCount = 1200 },
                    new GenTreeEra { Name = "Forest Era", ShortName = "fr.", ThroughBeginYear = 3201, YearCount = 4000 }
                },
                YearMonthCount = 9
            };
        }
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

            result = new List<Person>()
            {
                turin, lalaith,nienor,morwen,hurin,baragund,belegund,bregolas,beren,emeldir,barahir,bregor
            };

            lotrGenTree.Persons = result;
            return lotrGenTree;
        }
    }
}
