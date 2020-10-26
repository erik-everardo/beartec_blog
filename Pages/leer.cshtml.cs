using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Collections.Generic;
using erik_tech.Models;
using Microsoft.AspNetCore.Html;

namespace erik_tech.Pages
{
    public class LeerModel : PageModel
    {
        private readonly DbContextApp contexto;
        public Articulo articulo;
        public bool error = false;
        public LeerModel(DbContextApp _contexto)
        {
            contexto = _contexto;
        }
        public IActionResult OnGet(string id)
        {
            try
            {
                articulo = contexto.articulo.Where(a => a.Id.Equals(int.Parse(id))).Single();
            }
            catch (Exception e)
            {
                error = true;
            }
            
            
            return Page();
        }
        public string BuscarNombreAutorPorIdArticulo(int id)
        {
            var autor = contexto.cuenta.Where(c => c.Id.Equals(id)).Single();
            return autor.username;
        }
        
    }
}