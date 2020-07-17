using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using GenTreesCore.Services;
using GenTreesCore.Models;
using GenTreesCore.Entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using System.Net.Http;
using System.Net;

namespace GenTreesCore.Controllers
{
    [ApiController]
    [Route("/[controller]/[action]")]
    public class UsersController : Controller
    {
        private IUserService userService;
        private ApplicationContext db;

        public UsersController(ApplicationContext context)
        {
            userService = new UserService(context);
            db = context;
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel model)
        {
            User user = userService.LogIn(model.Login, model.Password);
            if (user != null)
            {
                Authenticate(model.Login);   
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return new BadRequestObjectResult("login failed");
            }
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterViewModel model)
        {
            if (userService.LoginIsRegistered(model.Login))
                return new BadRequestObjectResult("user alredy exists");
            else if (userService.EmailIsRegistered(model.Email))
                return new BadRequestObjectResult("email already exists");
            else
            {
                userService.Register(model.Login, model.Email, model.Password);
                Authenticate(model.Login);
                return RedirectToAction("Index", "Home");
            }
        }   

        [HttpGet]
        public bool IsLoggedIn()
        {
            return HttpContext.User.Identity.IsAuthenticated;
        }

        private async Task Authenticate(string login)
        {
            var userId = db.Users.FirstOrDefault(u => u.Login == login).Id;
            // создаем один claim
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userId.ToString())
            };
            // создаем объект ClaimsIdentity
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            // установка аутентификационных куки
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Home");
        }
    }
}
