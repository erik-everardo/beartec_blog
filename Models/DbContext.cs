
using Microsoft.EntityFrameworkCore;

namespace erik_tech.Models
{
    public class DbContextApp : DbContext
    {
        public DbContextApp (DbContextOptions<DbContextApp> options)
            : base(options)
        {
        }

        public DbSet<Cuenta> cuenta { get; set; }
        public DbSet<Articulo> articulo {get;set;}
        public DbSet<urlImagen> Imagenes { get; set; }
        public DbSet<comentario> Comentarios { get; set; }
        
    }
}