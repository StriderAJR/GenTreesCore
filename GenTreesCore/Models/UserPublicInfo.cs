using GenTreesCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenTreesCore.Models
{
    public class UserPublicInfo
    {
        public string Login;
        public IEnumerable<GenTree> PublicGenTrees;
    }
}
