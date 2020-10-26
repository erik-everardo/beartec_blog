using System;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc;
using erik_tech.Models;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;

namespace erik_tech.Pages
{
    public class homeModel : PageModel
    {

        private readonly DbContextApp contexto;
        public Cuenta usuario;
        public homeModel(DbContextApp dbContext)
        {
            contexto = dbContext;
        }
        public IActionResult OnGet(){
            return Redirect("/no_entre.html");
        }
        public IActionResult OnPost(string username,string password)
        {
            try
            {
                usuario = contexto.cuenta.Single(u => u.username.Equals(username));
                if (usuario.password == password)
                {
                    ViewData["nombre_de_usuario"] = usuario.username;
                    ViewData["password_usuario"] = usuario.password;
                    ViewData["correo"] = usuario.email;
                    ViewData["id_usuario"] = usuario.Id;
                    /*
                    if(usuario.modoOscuro) 
                        ViewData["modoOscuro"] = "true";
                    else 
                        ViewData["modoOscuro"] = "false";
                    if (usuario.modoOscuro)
                    {
                        ViewData["string_clase_barra_navegacion"] =
                            "navbar-dark bg-dark";
                        ViewData["string_clase_body"] = "bg-dark text-light";
                    }
                    else
                    {
                        ViewData["string_clase_barra_navegacion"] =
                            "navbar-light bg-light";
                        ViewData["string_clase_body"] = "bg-light text-body";
                    }
                    */
                    
                    //corregir, por mientras asi esta bien
                    ViewData["string_clase_barra_navegacion"] =
                        "navbar-light bg-light";
                    ViewData["string_clase_body"] = "bg-light text-body";
                    ViewData["modoOscuro"] = "false";
                    
                    if (usuario.parrafoDescripcion != null) ViewData["descripcion"] = usuario.parrafoDescripcion;
                    return Page();
                }
                else
                {
                    return RedirectToPage("/admin/Index", new{err = "contra-mala", usuario = username});
                }
            }
            catch (Exception e)
            {
                return RedirectToPage("/admin/Index",new {err = "nousuario"});
            }
        }
    }
}