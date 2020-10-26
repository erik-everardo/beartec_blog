using erik_tech.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Linq;

namespace erik_tech.Pages
{
    public class BorrarModel : PageModel
    {
        private readonly DbContextApp contexto;
        public BorrarModel(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public void OnPost(string id_articulo)
        {
            var articuloAEliminar = contexto.articulo.Single(a => a.Id.Equals(int.Parse(id_articulo)));
            contexto.articulo.Remove(articuloAEliminar);
            contexto.SaveChanges();
        }

        
    }
}