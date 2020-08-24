﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GenTreesCore.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Не указан логин.")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Не указан пароль.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }

    public class RegisterViewModel
    {
        [Required(ErrorMessage = "Не указан логин.")]
        public string Login { get; set; }
        [Required(ErrorMessage = "Не указан Email.")]
        [EmailAddress(ErrorMessage = "Email указан неправильно")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Не указан пароль.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Пароли не совпадают.")]
        public string ConfirmPassword { get; set; }
    }
}
