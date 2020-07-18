using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using GenTreesCore.Services;
using GenTreesCore.Models;
using GenTreesCore.Entities;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;

namespace GenTreesCore.Controllers
{
    [ApiController]
    [Route("/[controller]/[action]")]
    public class UsersController : Controller
    {
        private UserService userService;

        public UsersController(ApplicationContext context)
        {
            userService = new UserService(context);
        }

        [HttpGet]
        public IActionResult Login() => View();

        [HttpGet]
        public IActionResult Register() => View();

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (userService.LogIn(model.Login, model.Password) == null)
                return BadRequest("login failed");

            await Authenticate(model.Login);   
            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (userService.LoginIsRegistered(model.Login))
                return BadRequest("user alredy exists");
            else if (userService.EmailIsRegistered(model.Email))
                return BadRequest("email already exists");

            userService.Register(model.Login, model.Email, model.Password);
            await Authenticate(model.Login);
            return RedirectToAction("Index", "Home");
        }   

<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
        [HttpGet]
        public bool IsLoggedIn()
        {
            return HttpContext.User.Identity.IsAuthenticated;
        }

<<<<<<< Updated upstream
=======
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Home");
        }

>>>>>>> Stashed changes
>>>>>>> Stashed changes
        private async Task Authenticate(string login)
        {
            var userId = userService.GetUserByLogin(login).Id;
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
    }
}
