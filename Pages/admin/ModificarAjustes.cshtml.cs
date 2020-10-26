using Microsoft.AspNetCore.Mvc.RazorPages;
using erik_tech.Models;
using System.Linq;
using erik_tech.Clases;

namespace erik_tech.Pages
{
    public class ModificarAjustes : PageModel
    {
        private readonly DbContextApp contexto;

        public ModificarAjustes(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public void OnGet()
        {
            
        }

        public void OnPost(string id, string pass, string modoOscuro = "noCambia", string temaColor = "noCambia")
        {
            Cuenta usuario = contexto.cuenta.Find(int.Parse(id));
            if (usuario.password == pass)
            {
                usuario.modoOscuro = (modoOscuro == "on");
                if(temaColor != "noCambia")
                    usuario.temaColor = int.Parse(temaColor);
                contexto.cuenta.Update(usuario);
                contexto.SaveChanges();
            }
        }
    }
}