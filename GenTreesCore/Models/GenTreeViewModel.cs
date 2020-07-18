using System.Collections.Generic;
using GenTreesCore.Entities;

namespace GenTreesCore.Models
{
    public class GenTreeViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Creator { get; set; }
        public bool CanEdit { get; set; }
        public List<PersonViewModel> Persons { get; set; }
        public string DateCreated { get; set; }
        public string LastUpdated { get; set; }
        public string Image { get; set; }
        public GenTreeDateTimeSetting DateTimeSetting { get; set; }
        public List<CustomPersonDescriptionTemplate> DescriptionTemplates {get; set;}
    }

    public class PersonViewModel
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string BirthDate { get; set; }
        public string ShortBirthDate { get; set; }
        public string DeathDate { get; set; }
        public string ShortDeathDate { get; set; }
        public string Biography { get; set; }
        public string Image { get; set; }
        public List<CustomPersonDescription> CustomDescriptions { get; set; }
        public List<RelationViewModel> Relations { get; set; }
    }

    public class RelationViewModel
    {
        public int Id { get; set; }
        public int TargetPersonId { get; set; }
        public string RelationType { get; set; }
    }

    public class ChildRelationViewModel: RelationViewModel
    {
        public int? SecondParentId { get; set; }
        public string RelationRate { get; set; }
    }

    public class SpouseRelationViewModel: RelationViewModel
    {
        public bool IsFinished { get; set; }
    }
}
