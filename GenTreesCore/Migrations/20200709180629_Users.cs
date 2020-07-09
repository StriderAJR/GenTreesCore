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
                    Id = table.Column<int>(nullable: false),
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

            migrationBuilder.AddColumn<int>("Owner", table: "GenTrees");

            migrationBuilder.AddForeignKey(
                "FK_GenTrees_Users",
                table: "GenTrees",
                column: "Owner",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddColumn<bool>("IsPrivate", table: "GenTrees");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn("Owner", table: "GenTrees");
            migrationBuilder.DropColumn("IsPrivate", table: "GenTrees");

            migrationBuilder.DropTable("Users");
        }
    }
}
