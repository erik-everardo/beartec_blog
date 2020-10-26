using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using erik_tech.Clases;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using erik_tech.Models;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace erik_tech.Pages
{
    public class IndexModel : PageModel
    {
        private readonly DbContextApp contexto;
        public List<Articulo> articulos;
        public bool solicitoCategoria;
        public bool categoriaErronea;
        public string cat;

        public string NombreAutorPorId(int id)
        {
            return MetodosEstaticoGeneralesErikTech.ObtenerNombreAutorPorId(id, contexto);
        }
        public IndexModel(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public IActionResult OnGet([FromRoute] string categoria)
        {
            if(categoria == null)
            {
                solicitoCategoria = false;
                articulos = contexto.articulo.ToList();
                articulos = (from art in articulos orderby art.Id descending select art).ToList();
            }
            else
            {
                solicitoCategoria = true;
                cat = categoria;
                switch (categoria)
                {
                    case "Linux": 
                        articulos = contexto.articulo.Where(ar => ar.Linux).ToList();
                        articulos = (from ar in articulos orderby ar.Id descending select ar).ToList();
                        break;
                    case "Windows":
                        articulos = contexto.articulo.Where(ar => ar.Windows).ToList();
                        articulos = (from ar in articulos orderby ar.Id descending select ar).ToList();
                        break;
                    case "macOS":
                        articulos = contexto.articulo.Where(ar => ar.Macos).ToList();
                        articulos = (from ar in articulos orderby ar.Id descending select ar).ToList();
                        break;
                    case "Android":
                        articulos = contexto.articulo.Where(ar => ar.Android).ToList();
                        articulos = (from ar in articulos orderby ar.Id descending select ar).ToList();
                        break;
                    case "Desarrollo":
                        articulos = contexto.articulo.Where(ar => ar.Desarrollo).ToList();
                        articulos = (from ar in articulos orderby ar.Id descending select ar).ToList();
                        break;
                    case "Gaming":
                        articulos = contexto.articulo.Where(ar => ar.Gaming).ToList();
                        articulos = (from ar in articulos orderby ar.Id descending select ar).ToList();
                        break;
                    case "Hardware":
                        articulos = contexto.articulo.Where(ar => ar.Hardware).ToList();
                        articulos = (from ar in articulos orderby ar.Id descending select ar).ToList();
                        break;
                    default:
                        categoriaErronea = true;
                        return Page();
                }
            }
            return Page();
        }
    }
}
