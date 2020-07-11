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

namespace GenTreesCore.Controllers
{
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
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                User user = userService.LogIn(model.Login, model.Password);
                if (user != null)
                {
                    await db.SaveChangesAsync();
                    await Authenticate(model.Login); // аутентификация
                    return RedirectToAction("Index", "Home"); //возвращение на домашнюю страницу
                }
                else
                {
                    ModelState.AddModelError("Login", "Некорректные логин и(или) пароль");
                }
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (userService.LoginIsRegistered(model.Login))
                {
                    ModelState.AddModelError("Login", "Пользователь с таким логином уже существует");
                }
                else if (userService.EmailIsRegistered(model.Email))
                {
                    ModelState.AddModelError("Email", "Email уже зарегистрирован");
                }
                else
                {
                    // добавляем пользователя в бд
                    userService.Register(model.Login, model.Email, model.Password);

                    await db.SaveChangesAsync();
                    await Authenticate(model.Login); // аутентификация

                    return RedirectToAction("Index", "Home"); //возвращение на домашню страницу
                }
            }
            return View(model);
        }

        [HttpGet]
        public IActionResult ForgotPassword()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (!userService.EmailIsConfirmed(model.Login))
                {
                    ModelState.AddModelError("Login", "Пользователя не существует или Email пользователя не был подтвержден");
                }
                else
                {
                    //TODO: новый пароль на email
                    ModelState.AddModelError("Login", "Данная функция недоступна, свяжитесь с администратором сайта");
                }
            }
            return View(model);
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
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return RedirectToAction("Index", "Home");
        }
    }
}
