using System;
using System.Linq;
using erik_tech.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace erik_tech.Pages.admin
{
    public class VistaPrevia : PageModel
    {
        private DbContextApp _contextApp;
        public Articulo articulo;
        public VistaPrevia(DbContextApp contextApp)
        {
            _contextApp = contextApp;
        }
        public void OnPost(int idUsuario,string nombrePublicacion,
            string encabezadoPublicacion,string cuerpo)
        {
            articulo = new Articulo()
            {
                autor_id = idUsuario,
                titulo_publicacion = nombrePublicacion,
                encabezado = encabezadoPublicacion,
                cuerpo = cuerpo,
                fecha_publicacion = DateTime.Today
            };
        }
        public string BuscarNombreAutorPorIdArticulo(int id)
        {
            var autor = _contextApp.cuenta.Where(c => c.Id.Equals(id)).Single();
            return autor.username;
        }
    }
}