using System.Linq;
using Microsoft.AspNetCore.Mvc.RazorPages;
using erik_tech.Models;

namespace erik_tech.Pages
{
    public class ModificarInfoPerfil : PageModel
    {
        private readonly DbContextApp contexto;

        public ModificarInfoPerfil(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public void OnGet()
        {
            
        }
        public void OnPost(string id, string nuevoNombre, string nuevoCorreo, string pass, string descripcion)
        {
            Cuenta usuario = contexto.cuenta.Single(c => c.Id.Equals(int.Parse(id)));
            usuario.username = nuevoNombre;
            usuario.email = nuevoCorreo;
            usuario.parrafoDescripcion = descripcion;
            contexto.cuenta.Update(usuario);
            contexto.SaveChanges();
        }
    }
}