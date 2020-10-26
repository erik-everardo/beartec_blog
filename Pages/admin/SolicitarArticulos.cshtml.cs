using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;
using erik_tech.Models;
using System.Collections.Generic;
using System.Linq;


namespace erik_tech.Pages
{
    public class SolicitarArticuloModel : PageModel
    {
        private readonly DbContextApp contexto;
        public List<Articulo> articulos;
        public SolicitarArticuloModel(DbContextApp _contexto)
        {
            contexto = _contexto;
        }
        public IActionResult OnGet()
        {
            return Redirect("/no_entre.html");
        }
        public IActionResult OnPost(string ID_usuario)
        {
            
            articulos = contexto.articulo.Where(a => a.autor_id.Equals(int.Parse(ID_usuario))).ToList();
            Cuenta usuario = contexto.cuenta.Find(int.Parse(ID_usuario));
            /* mejorar esto del modo oscuro...
            if(usuario.modoOscuro) 
                ViewData["string_clase_oscuro"] = "bg-dark text-light";
            else 
                ViewData["string_clase_oscuro"] = "";
            */
            
            // corregir
            ViewData["string_clase_oscuro"] = "";
            return Page();
        }
    }
}