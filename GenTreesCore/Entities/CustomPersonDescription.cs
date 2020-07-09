using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace GenTreesCore.Entities
{
    public class CustomPersonDescriptionTemplate
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class CustomPersonDescription
    {
        public int Id { get; set; }
        public CustomPersonDescriptionTemplate Template { get; set; }
        public object Value { get; set; }
    }
}
