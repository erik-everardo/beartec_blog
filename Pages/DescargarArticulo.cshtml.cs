using Microsoft.AspNetCore.Mvc.RazorPages;
using erik_tech.Models;

namespace erik_tech.Pages
{
    public class DescargarArticulo : PageModel
    {
        private readonly DbContextApp contexto;
        public string encabezado, nombre, cuerpo,autor;

        public DescargarArticulo(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public void OnGet(string id)
        {
            Articulo articulo = contexto.articulo.Find(int.Parse(id));
            encabezado = articulo.encabezado;
            nombre = articulo.titulo_publicacion;
            cuerpo = articulo.cuerpo;
            autor = contexto.cuenta.Find(articulo.autor_id).username;
        }
    }
}