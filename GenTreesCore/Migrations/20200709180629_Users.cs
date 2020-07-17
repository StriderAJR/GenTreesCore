using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace GenTreesCore.Migrations
{
    public partial class Users : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Login = table.Column<string>(maxLength: 100),
                    PasswordHash = table.Column<string>(maxLength: 300),
                    Salt = table.Column<string>(maxLength: 20),
                    Email = table.Column<string>(maxLength: 320),
                    EmailConfirmed = table.Column<bool>(),
                    DateCreated = table.Column<DateTime>(),
                    LastVisit = table.Column<DateTime>(),
                    IsAdmin = table.Column<bool>()
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", t => t.Id);
                });

            migrationBuilder.AddColumn<int>("OwnerId", table: "GenTrees");

            migrationBuilder.AddForeignKey(
                "FK_GenTrees_Users",
                table: "GenTrees",
                column: "OwnerId",
                principalTable: "Users",
                principalColumn: "Id");
        }
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey("FK_GenTrees_Users", "GenTrees");
            migrationBuilder.DropColumn("OwnerId", table: "GenTrees");

            migrationBuilder.DropTable("Users");
        }
    }
}
