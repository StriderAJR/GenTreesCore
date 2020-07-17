using Microsoft.AspNetCore.Identity;
using System;

namespace GenTreesCore.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string PasswordHash { get; set; }
        public string Salt { get; set; }
        public string Email { get; set; }
        public bool EmailConfirmed { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime LastVisit { get; set; }
        public bool IsAdmin { get; set; }
        //public string Role { get; set }

    }

    public enum Role
    {
        User,
        Admin
    }
}