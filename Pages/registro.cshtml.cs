using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc.RazorPages;
using erik_tech.Models;
using Microsoft.AspNetCore.Mvc;

namespace erik_tech.Pages
{
    public class RegistroModel : PageModel
    {
        private readonly DbContextApp _dbContext;
        public RegistroModel(DbContextApp dbContext)
        {
            _dbContext = dbContext;
        }

        public string validacion;
        public string validacionPassword;
        public IActionResult OnPost(string username, string password, string email)
        {
            if (_dbContext.cuenta.Any(c => c.username.Equals(username)))
            {
                validacion = "is-invalid";
                return Page();
            }

            if (String.IsNullOrWhiteSpace(password) || String.IsNullOrEmpty(password))
            {
                validacionPassword = "is-invalid";
                return Page();
            }
                
            Cuenta cuenta = new Cuenta {username = username, password = password, email = email};
            _dbContext.cuenta.Add(cuenta);

            _dbContext.SaveChanges();
            return RedirectToPage("/admin/Index",new{usuario = username, redirigido = "si"});
        }
    }
}