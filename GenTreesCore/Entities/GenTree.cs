using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenTreesCore.Entities
{
    public class GenTree
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Person> Persons { get; set; }

        public GenTreeDateTimeSetting DateTimeSettings { get; set; }
        public List<CustomPersonDescription> CustomPersonDescriptions { get; set; }
    }
}
