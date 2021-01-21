using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Collections.Generic;
using erik_tech.Clases;
using erik_tech.Models;
using Microsoft.AspNetCore.Html;

namespace erik_tech.Pages
{
    public class LeerModel : PageModel
    {
        private readonly DbContextApp db;
        public Articulo articulo;
        public List<Articulo> recommendedArticles;
        public bool error = false;
        public LeerModel(DbContextApp _contexto)
        {
            db = _contexto;
        }
        public IActionResult OnGet(string id)
        {
            try
            {
                ViewData["isArticle"] = true;
                articulo = db.articulo.Single(a => a.Id.Equals(int.Parse(id)));
                ViewData["title"] = articulo.titulo_publicacion;
                ViewData["description"] = MetodosEstaticoGeneralesErikTech.GetDescription(articulo.cuerpo);
                ViewData["pictureURL"] = MetodosEstaticoGeneralesErikTech.GetAnImageURLFromHTML(articulo.cuerpo);
                recommendedArticles = db.articulo
                    .Where(articulo => !articulo.Id.Equals(this.articulo.Id)).ToList();
                recommendedArticles.Reverse();
                recommendedArticles = recommendedArticles.Take(5).ToList();
            }
            catch (Exception e)
            {
                error = true;
            }
            
            
            return Page();
        }
        public string BuscarNombreAutorPorIdArticulo(int id)
        {
            var autor = db.cuenta.Where(c => c.Id.Equals(id)).Single();
            return autor.username;
        }
        
    }
}