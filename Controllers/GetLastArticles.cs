using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Text.RegularExpressions;
using erik_tech.Clases;
using erik_tech.Models;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.TagHelpers.Cache;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace erik_tech.Controllers
{
    [ApiController]
    [Route("api/GetLastArticles")]
    public class GetLastArticles : Controller
    {
        private readonly DbContextApp db;

        public GetLastArticles(DbContextApp _db)
        {
            db = _db;
        }
        // GET
        [HttpGet]
        public IEnumerable<LastArticle> Index()
        {
            List<Articulo> articles;
            try
            {
                var table = db.articulo.ToList();
                table.Reverse();
                articles = table.TakeLast(4).ToList();

            }
            catch (Exception E)
            {
                var table = db.articulo.ToList();
                table.Reverse();
                articles = table;
            }
            
            List<LastArticle> lastArticles= new List<LastArticle>();
            foreach (var article in articles)
            {
                lastArticles.Add(new LastArticle()
                {
                    titulo = article.titulo_publicacion,
                    descripcion = MetodosEstaticoGeneralesErikTech.GetDescription(article.cuerpo),
                    link = "https://beartec.azurewebsites.net/leer?id=" + article.Id
                });
            }

            return lastArticles;
        }
        


    
    }
}