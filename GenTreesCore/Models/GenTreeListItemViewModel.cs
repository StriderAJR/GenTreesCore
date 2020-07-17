using System;

namespace GenTreesCore.Models
{
    public class GenTreeSimpleViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Creator { get; set; }
        public string LastUpdated { get; set; }
        public string Image { get; set; }
    }

    public class MyTreeSimpleViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string DateCreated { get; set; }
        public string LastUpdated { get; set; }
        public string Image { get; set; }
    }
}
