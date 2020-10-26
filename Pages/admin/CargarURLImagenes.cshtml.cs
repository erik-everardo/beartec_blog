using erik_tech.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace erik_tech.Pages.admin
{
    public class CargarURLImagenes : PageModel
    {
        private readonly DbContextApp _contextApp;

        public CargarURLImagenes(DbContextApp contextApp)
        {
            _contextApp = contextApp;
        }
        public void OnPost(int idUsuario, string url, string nombre, bool externa,string password)
        {
            if (_contextApp.cuenta.Find(idUsuario).password.Equals(password))
            {
                urlImagen Imagen = new urlImagen()
                {
                    externa = externa,
                    IdUser = idUsuario,
                    url = url,
                    nombre = nombre
                };
                _contextApp.Imagenes.Add(Imagen);
                _contextApp.SaveChanges(); 
            }
            
        }
    }
}