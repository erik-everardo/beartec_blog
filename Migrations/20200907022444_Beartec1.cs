using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace erik_tech.Migrations
{
    public partial class Beartec1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "articulo",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    titulo_publicacion = table.Column<string>(nullable: true),
                    encabezado = table.Column<string>(nullable: true),
                    cuerpo = table.Column<string>(nullable: true),
                    autor_id = table.Column<int>(nullable: false),
                    fecha_publicacion = table.Column<DateTime>(nullable: false),
                    Linux = table.Column<bool>(nullable: false),
                    Windows = table.Column<bool>(nullable: false),
                    Macos = table.Column<bool>(nullable: false),
                    Android = table.Column<bool>(nullable: false),
                    Desarrollo = table.Column<bool>(nullable: false),
                    Gaming = table.Column<bool>(nullable: false),
                    Hardware = table.Column<bool>(nullable: false),
                    Otra = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_articulo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Comentarios",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Texto = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comentarios", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "cuenta",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    username = table.Column<string>(nullable: true),
                    password = table.Column<string>(nullable: true),
                    email = table.Column<string>(nullable: true),
                    modoOscuro = table.Column<bool>(nullable: false),
                    temaColor = table.Column<int>(nullable: false),
                    parrafoDescripcion = table.Column<string>(nullable: true),
                    urlImagenPerfil = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cuenta", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Imagenes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IdUser = table.Column<int>(nullable: false),
                    url = table.Column<string>(nullable: true),
                    externa = table.Column<bool>(nullable: false),
                    nombre = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagenes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "articulo");

            migrationBuilder.DropTable(
                name: "Comentarios");

            migrationBuilder.DropTable(
                name: "cuenta");

            migrationBuilder.DropTable(
                name: "Imagenes");
        }
    }
}
