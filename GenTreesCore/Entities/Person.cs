using System.Collections.Generic;

namespace GenTreesCore.Entities
{
    public class Person
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public GenTreeDateTime BirthDate { get; set; }
        public GenTreeDateTime DeathDate { get; set; }
        public List<CustomPersonDescription> CustomDescriptions { get; set; }
        /// <summary>
        /// Родственные связи
        /// </summary>
        public List<Relation> Relations { get; set; }
    }
}
