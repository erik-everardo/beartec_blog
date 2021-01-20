using erik_tech.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Collections.Generic;
using erik_tech.Clases;

namespace erik_tech.Pages
{
    public class PerfilModel : PageModel
    {
        
        private readonly DbContextApp contexto;
        public Cuenta usuario;
        public bool fuePost;
        public List<Articulo> articulosUsuario;

        //int => id del articulo
        //Dictionary => El diccionario que incluye como clave cada categoria y como valor un valor bool que indica si pertenece o no
        public Dictionary<int,Dictionary<int,bool>> categoriasArticulos = new Dictionary<int,Dictionary<int,bool>>();
        public PerfilModel(DbContextApp contexto)
        {
            this.contexto = contexto;
        }
        //Cuando es solicitado publicamente. Se abre directamente esta pagina
        public IActionResult OnGet(string user)
        {
            ViewData["isArticle"] = false;
            fuePost = false;
            usuario = contexto.cuenta.Single(u => u.username.Equals(user));
            if (usuario == null)
            {
                return NotFound();
            }
            articulosUsuario = MetodosEstaticoGeneralesErikTech.ObtenerArticulosAutor(usuario.Id,contexto);
            try
            {
                ViewData["description"] = usuario.parrafoDescripcion;
            }
            catch
            {
                ViewData["description"] = "Perfil editor de " + usuario.username + " en BearTec Blog";
            }
            return Page();
        }
        /*Cuando se responda un POST se envia codigo para ser renderizado en admin */
        public IActionResult OnPost(string user)
        {
            ViewData["isArticle"] = false;
            fuePost = true;
            usuario = contexto.cuenta.Single(u => u.username.Equals(user));
            articulosUsuario = MetodosEstaticoGeneralesErikTech.ObtenerArticulosAutor(usuario.Id,contexto);
            
            return Page();
        }

    }
}