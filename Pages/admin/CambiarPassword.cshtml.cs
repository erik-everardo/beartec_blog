using System;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Linq;
using erik_tech.Models;

namespace erik_tech.Pages
{
    public class CambiarPassword : PageModel
    {
        private readonly DbContextApp contexto;
        public string estado;

        public CambiarPassword(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public void OnGet()
        {
            
        }

        public void OnPost(string idUsuario, string passwordActual,string nuevaPassword)
        {
            Cuenta usuario = contexto.cuenta.Find(int.Parse(idUsuario));
            if (usuario.password.Equals(passwordActual))
            {
                estado = "hecho";
                usuario.password = nuevaPassword;
            }
            else
            {
                estado = "error";
            }

            contexto.cuenta.Update(usuario);
            contexto.SaveChanges();
        }
    }
}