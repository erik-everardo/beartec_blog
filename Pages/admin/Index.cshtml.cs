using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;
namespace erik_tech.Pages
{
    public class AdminIndexModel : PageModel
    {
        public bool usuarioNoExiste = false;
        public bool contraIncorrecta = false;
        public string textoUsuario = "";
        public bool redirigido = false;
        public void OnGet(string err="", string usuario = "", string redirigido = "no")
        {
            switch (err)
            {
                case "contra-mala": contraIncorrecta = true;
                    break;
                case "nousuario": usuarioNoExiste = true;
                    break;
                default: usuarioNoExiste = false;
                    contraIncorrecta = false;
                    break;
            }

            if (!string.IsNullOrEmpty(usuario))
                textoUsuario = usuario;
            
            switch (redirigido)
            {
                case "si": this.redirigido = true;
                break;
                case "no": this.redirigido = false;
                break;
            }
        }
        

    }
}