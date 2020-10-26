//Esta clase contiene varios metodos estaticos que pueden ser llamados desde cualquier pagina
using erik_tech.Pages;
using erik_tech.Models;
using System.Collections.Generic;
using System.Linq;
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
    }
}