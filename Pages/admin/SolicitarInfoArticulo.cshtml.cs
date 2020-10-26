using erik_tech.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace erik_tech.Pages.admin
{
    public class SolicitarInfoArticulo : PageModel
    {
        private readonly DbContextApp _contextApp;
        public string respuesta;

        public SolicitarInfoArticulo(DbContextApp contextApp)
        {
            _contextApp = contextApp;
        }

        /*
         dato
         1: titulo
         2: encabezado
         3: cuerpo
         4: categorias (array de booleanos en string)
         */
        public IActionResult OnGet(int id, int dato)
        {
            Articulo articulo = _contextApp.articulo.Find(id);
            switch (dato)
            {
                case 1:
                    respuesta = articulo.titulo_publicacion;
                    break;
                case 2:
                    respuesta = articulo.encabezado;
                    break;
                case 3:
                    respuesta = articulo.cuerpo;
                    break;
                case 4:
                    respuesta = ArrayDeCategoriasEnString(articulo.Linux, articulo.Windows, articulo.Macos,
                        articulo.Android, articulo.Desarrollo, articulo.Gaming, articulo.Hardware);
                    break;
            }

            return Page();
        }

        public string ArrayDeCategoriasEnString(bool linux, bool win, bool mac, bool android, bool desarrollo,
            bool gaming, bool hardware)
        {
            string arrayEnString = "";
            if (linux)
                arrayEnString += "1";
            else
                arrayEnString += "0";
            if (win)
                arrayEnString += "1";
            else
                arrayEnString += "0";
            if (mac)
                arrayEnString += "1";
            else
                arrayEnString += "0";
            if (android)
                arrayEnString += "1";
            else
                arrayEnString += "0";
            if (desarrollo)
                arrayEnString += "1";
            else
                arrayEnString += "0";
            if (gaming)
                arrayEnString += "1";
            else
                arrayEnString += "0";
            if (hardware)
                arrayEnString += "1";
            else
                arrayEnString += "0";
            return arrayEnString;
        }
    }
}