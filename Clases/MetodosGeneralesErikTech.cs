//Esta clase contiene varios metodos estaticos que pueden ser llamados desde cualquier pagina

using System;
using erik_tech.Pages;
using erik_tech.Models;
using System.Collections.Generic;
using System.Linq;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace erik_tech.Clases
{
    public static class MetodosEstaticoGeneralesErikTech
    {
        public static List<Articulo> ObtenerArticulosAutor(int id_autor, DbContextApp contexto)
        {
            List<Articulo> articulos = contexto.articulo.Where(a => a.autor_id.Equals(id_autor)).ToList();
            return articulos;
        }
        public static int BuscarIdArticuloPorTitulo(string Titulo,DbContextApp Contexto)
        {
            Articulo articuloEncontrado = Contexto.articulo.Single(a => a.titulo_publicacion.Equals(Titulo));
            return articuloEncontrado.Id;
        }

        public static bool String1O0ABool(string valorAEvaluar)
        {

            return valorAEvaluar == "1" || valorAEvaluar.ToLower() == "true" || valorAEvaluar.ToLower() == "on";
        }

        public static string ObtenerNombreAutorPorId(int id,DbContextApp contexto)
        {
            return contexto.cuenta.Find(id).username;
        }
        public static string GetDescription(string htmlBody)
        {
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(htmlBody);
            String extractedText;
            try
            {
                extractedText = htmlDoc.DocumentNode.SelectSingleNode("//p").InnerText;
            }
            catch (Exception e)
            {
                extractedText = String.Empty;
            }
            
            if (extractedText.Count() <= 140)
            {
                return extractedText;
            }
            return extractedText.Substring(0,140);

        }

        /*This method returns the first image it finds on the HTML code. If no image is found, it
         will return the default banner*/
        public static string GetAnImageURLFromHTML(string htmlBody)
        {
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(htmlBody);
            try
            {
                return htmlDoc.DocumentNode.SelectSingleNode("//img").Attributes["src"].Value;
            }
            catch (Exception e)
            {
                // cambiar esto por el nuevo banner del canal
                return "https://beartec.site/images/banner1.png";
            }
        }
    }
}