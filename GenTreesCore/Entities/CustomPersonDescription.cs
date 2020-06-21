using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace GenTreesCore.Entities
{
    public class CustomPersonDescription
    {
        public string Name { get; set; }
        public object Value { get; set; }
    }
}
