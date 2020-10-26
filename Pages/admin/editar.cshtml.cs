using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Linq;
using erik_tech.Clases;
using erik_tech.Models;
using System.Text.Encodings.Web;

namespace erik_tech.Pages
{
    public class EditarModel : PageModel
    {
        private readonly DbContextApp contexto;
        public bool error;

        public EditarModel(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public IActionResult OnPost(
            int id,
            string nombre,
            string encabezado,
            string cuerpo,
            bool linux = false,
            bool windows = false,
            bool macos = false,
            bool android = false,
            bool desarrollo = false,
            bool gaming = false,
            bool hardware = false
            )
        {
            try
            {
                Articulo articuloAModificar = contexto.articulo.Find(id);
            
                //Asignar todas las propiedades

                articuloAModificar.titulo_publicacion = nombre;
                articuloAModificar.encabezado = encabezado;
                articuloAModificar.cuerpo = cuerpo;
                articuloAModificar.Linux = linux;
                articuloAModificar.Windows = windows;
                articuloAModificar.Macos = macos;
                articuloAModificar.Android = android;
                articuloAModificar.Desarrollo = desarrollo;
                articuloAModificar.Gaming = gaming;
                articuloAModificar.Hardware = hardware;

                contexto.articulo.Update(articuloAModificar);
                contexto.SaveChanges();
                error = false;
            }
            catch (Exception e)
            {
                error = true;
            }
            

            return Page();
        }
    }
}