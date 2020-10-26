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

            try
            {
                busqueda = q.ToLower();
                ArticuloEncontrados = contexto.articulo.Where(
                    articulo => articulo.titulo_publicacion.ToLower().Contains(busqueda) || articulo.encabezado.ToLower().Contains(busqueda) || articulo.cuerpo.ToLower().Contains(busqueda)).ToList();
            }
            catch (NullReferenceException)
            {
                ArticuloEncontrados = new List<Articulo>();
            }
        }
    }
}