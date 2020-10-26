using System.Collections.Generic;
using System.Linq;
using erik_tech.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace erik_tech.Pages.admin
{
    public class Imagen : PageModel
    {
        private readonly DbContextApp _contextApp;

        public Imagen(DbContextApp contextApp)
        {
            _contextApp = contextApp;
        }

        public List<urlImagen> ListaImagenes;
        public bool fuePost;
        public IActionResult OnGet(int idUsuario)
        {
            fuePost = false;
            ListaImagenes = _contextApp.Imagenes.Where(obj => obj.IdUser.Equals(idUsuario)).ToList();
            return Page();
        }

        public void OnPost(string accion,int idImagen,int idUsuario, string password,string nuevoNombre="")
        {
            fuePost = true;
            if (_contextApp.cuenta.Find(idUsuario).password.Equals(password))
            {
                switch (accion)
                {
                    case "borrar":
                        _contextApp.Imagenes.Remove(_contextApp.Imagenes.Find(idImagen));
                        _contextApp.SaveChanges();
                        break;
                    case "editar":
                        urlImagen imagen = _contextApp.Imagenes.Find(idImagen);
                        imagen.nombre = nuevoNombre;
                        _contextApp.Imagenes.Update(imagen);
                        _contextApp.SaveChanges();
                        break;
                }
            }
            
        }
    }
}