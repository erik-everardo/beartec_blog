using System;
using System.Collections.Generic;
using System.Linq;
using erik_tech.Clases;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using erik_tech.Models;

namespace erik_tech.Pages
{
    public class buscar : PageModel
    {
        public string busqueda;
        private readonly DbContextApp contexto;
        public List<Articulo> ArticuloEncontrados;

        public buscar(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        public string NombreAutorPorId(int id)
        {
            return MetodosEstaticoGeneralesErikTech.ObtenerNombreAutorPorId(id, contexto);
        }
        public void OnGet([FromQuery] string q)
        {
            ViewData["isArticle"] = false;
            try
            {
                busqueda = q.ToLower();
                
                busqueda = busqueda.Replace("á", "a");
                busqueda = busqueda.Replace("é", "e");
                busqueda = busqueda.Replace("í", "i");
                busqueda = busqueda.Replace("ó", "o");
                busqueda = busqueda.Replace("ú", "u");
                
                ArticuloEncontrados = contexto.articulo.Where(
                    articulo => 
                        articulo.titulo_publicacion.ToLower()
                            .Replace("á","a")
                            .Replace("é","e")
                            .Replace("í","i")
                            .Replace("ó","o")
                            .Replace("ú","u")
                            .Contains(busqueda) 
                        || articulo.encabezado.ToLower()
                            .Replace("á","a")
                            .Replace("é","e")
                            .Replace("í","i")
                            .Replace("ó","o")
                            .Replace("ú","u")
                            .Contains(busqueda) 
                        || articulo.cuerpo.ToLower()
                            .Replace("á","a")
                            .Replace("é","e")
                            .Replace("í","i")
                            .Replace("ó","o")
                            .Replace("ú","u")
                            .Contains(busqueda))
                    .ToList();
            }
            catch (NullReferenceException)
            {
                ArticuloEncontrados = new List<Articulo>();
            }
        }
    }
}