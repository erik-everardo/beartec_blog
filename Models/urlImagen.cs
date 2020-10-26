namespace erik_tech.Models
{
    public class urlImagen
    {
        public int Id { get; set; } 
        public int IdUser { get; set; }
        public string url { get; set; }
        public bool externa { get; set; }
        public string nombre { get; set; }
    }
}