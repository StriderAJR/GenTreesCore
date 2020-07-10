using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using GenTreesCore.Entities;

namespace GenTreesCore.Services
{
    public interface IUserService
    {
        void Register(string login, string email, string password);
        User LogIn(string login, string password);
        bool IsRegistered(string login);
    }

    /// <summary>
    /// Класс, реализующий действия с пользователями
    /// </summary>
    public class UserService : IUserService
    {
        private ApplicationContext _db;

        public UserService(ApplicationContext db)
        {
            _db = db;
        }

        public void Register(string login, string email, string password)
        {
            var salt = GenerateSalt();
            var hash = GetPasswordHash(password, salt);
            _db.Users.Add(
                new User
                {
                    Login = login,
                    PasswordHash = hash,
                    Salt = salt,
                    Email = email,
                    EmailConfirmed = false,
                    DateCreated = DateTime.Now,
                    LastVisit = DateTime.Now,
                    IsAdmin = false
                });
        }

        public bool IsRegistered(string login)
        {
            return _db.Users.FirstOrDefault(x => x.Login == login) != null;
        }

        public User LogIn(string login, string password)
        {
            var user = _db.Users.FirstOrDefault(x => x.Login == login);

            if (user == null)
                return null;

            var hash = GetPasswordHash(password, user.Salt);
            if (user.PasswordHash != hash)
                return null;

            return user;
        }
        private string GenerateSalt()
        {
            byte[] data = new byte[8];
            RandomNumberGenerator.Fill(data);
            return Encoding.UTF8.GetString(data);
        }

        private string GetPasswordHash(string password, string salt)
        {
            byte[] data = Encoding.UTF8.GetBytes(password + salt);
            SHA256 sha256 = new SHA256CryptoServiceProvider();
            byte[] result = sha256.ComputeHash(data);

            return Encoding.UTF8.GetString(result);
        }
    }
}
