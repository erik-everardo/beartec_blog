//esta pagina recibe un articulo, lo comprueba y lo registra
//en la base de datos

using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;
using erik_tech.Models;
using System;
using System.Linq;
using erik_tech.Clases;

namespace erik_tech.Pages
{
    public class PublicarModel : PageModel
    {
        private readonly DbContextApp contexto;
        public PublicarModel(DbContextApp _dbcontext)
        {
            contexto = _dbcontext;
        }
        public IActionResult OnGet()
        {
            return Redirect("/no_entre.html");
        }

        //subir el articulo a la base de datos
        public void OnPost(
            string titulo_publicacion,
            string autor,
            string cuerpo,
            string encabezado,
            string linux = "0",
            string windows = "0",
            string macos = "0",
            string android = "0",
            string desarrollo = "0",
            string gaming = "0",
            string hardware = "0")
        {
            Articulo articulo = new Articulo();
            articulo.encabezado = encabezado;
            articulo.cuerpo = cuerpo;
            articulo.fecha_publicacion = DateTime.Today;
            articulo.autor_id = buscarIdAutorPorNombre(autor);
            articulo.titulo_publicacion = titulo_publicacion;
            articulo.Linux = MetodosEstaticoGeneralesErikTech.String1O0ABool(linux);
            articulo.Windows = MetodosEstaticoGeneralesErikTech.String1O0ABool(windows);
            articulo.Macos = MetodosEstaticoGeneralesErikTech.String1O0ABool(macos);
            articulo.Android = MetodosEstaticoGeneralesErikTech.String1O0ABool(android);
            articulo.Desarrollo = MetodosEstaticoGeneralesErikTech.String1O0ABool(desarrollo);
            articulo.Gaming = MetodosEstaticoGeneralesErikTech.String1O0ABool(gaming);
            articulo.Hardware = MetodosEstaticoGeneralesErikTech.String1O0ABool(hardware);
            if (linux == "0" && windows == "0" && 
                macos == "0" && android == "0" && 
                desarrollo == "0" && gaming == "0" && hardware == "0") articulo.Otra = true;
            

            contexto.articulo.Add(articulo);
            contexto.SaveChanges();
            

        }
        

        public int buscarIdAutorPorNombre(string nombre)
        {
            if(contexto.cuenta.Where(c => c.username.Equals(nombre)).Any())
            {
                var autor = contexto.cuenta.Where(c => c.username.Equals(nombre)).Single();
                return autor.Id;
            }
            else
            {
                return -1;
            }
        }
        
    }
}