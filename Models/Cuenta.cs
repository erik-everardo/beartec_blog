using System;
using System.ComponentModel.DataAnnotations;

namespace erik_tech.Models
{
    public class Cuenta
    {
        public int Id {get;set;}
        public string username {get;set;}
        public string password {get;set;}
        public string email {get;set;}
        public bool modoOscuro { get; set; }
        public int temaColor { get; set; }
        public string parrafoDescripcion { get; set; }
        public string urlImagenPerfil { get; set; }
    }
}