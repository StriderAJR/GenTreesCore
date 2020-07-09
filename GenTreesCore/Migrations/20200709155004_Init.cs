using GenTreesCore.Entities;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GenTreesCore.Migrations
{
    public partial class Init : Migration
    {

        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
               name: "GenTreeDateTimeSettings",
               columns: table => new
               {
                   Id = table.Column<int>(),
                   Name = table.Column<string>(maxLength: 100),
                   YearMonthCount = table.Column<int>(),
                   Eras_json = table.Column<string>()
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_GenTreeDateTimeSettings", t => t.Id);
               });

            migrationBuilder.CreateTable(
                name: "GenTrees",
                columns: table => new
                {
                    Id = table.Column<int>(),
                    Name = table.Column<string>(),
                    Description = table.Column<string>(nullable: true),
                    DateTimeSetting = table.Column<int>()
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenTrees", t => t.Id);
                    table.ForeignKey("FK_GenTrees_DateTimeSettings", t => t.DateTimeSetting, "GenTreeDateTimeSettings", "Id");
                });

            migrationBuilder.CreateTable(
               name: "Persons",
               columns: table => new
               {
                   Id = table.Column<int>(),
                   GenTree = table.Column<int>(),
                   LastName = table.Column<string>(maxLength: 80),
                   FirstName = table.Column<string>(maxLength: 80),
                   MiddleName = table.Column<string>(nullable: true, maxLength: 80),
                   BirthDate_json = table.Column<string>(nullable: true),
                   DeathDate_json = table.Column<string>(nullable: true),
                   BirthPlace = table.Column<string>(nullable: true, maxLength: 200),
                   Biography = table.Column<string>(nullable: true)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Persons", t => t.Id);
                   table.ForeignKey("FK_Persons_GenTrees", t => t.GenTree, "GenTrees", "Id");
               });

            migrationBuilder.CreateTable(
              name: "CustomPersonDescriptionTemplates",
              columns: table => new
              {
                  Id = table.Column<int>(),
                  GenTree = table.Column<int>(),
                  Name = table.Column<string>(maxLength: 100)
              },
              constraints: table =>
              {
                  table.PrimaryKey("PK_CustomPersonsDescriptionTemplates", t => t.Id);
                  table.ForeignKey("FK_CustomPersonsDescriptionTemplates_GenTree", t => t.GenTree, "GenTrees", "Id");
              });

            migrationBuilder.CreateTable(
              name: "CustomPersonDescriptions",
              columns: table => new
              {
                  Id = table.Column<int>(),
                  Template = table.Column<int>(),
                  Value = table.Column<string>()
              },
              constraints: table =>
              {
                  table.PrimaryKey("PK_CustomPersonsDescriptions", t => t.Id);
                  table.ForeignKey("FK_CustomPersonsDescriptions_Templates", t => t.Template, "CustomPersonDescriptionTemplates", "Id");
              });

            migrationBuilder.CreateTable(
               name: "Relations",
               columns: table => new
               {
                   Id = table.Column<int>(),
                   SourcePerson = table.Column<int>(),
                   TargetPerson = table.Column<int>(),
                   RelationType = table.Column<string>(maxLength: 100),
                   IsFinished = table.Column<bool>(nullable: true),
                   SecondParent = table.Column<int>(nullable: true),
                   RelationRate = table.Column<string>(nullable: true)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Relations", t => t.Id);
                   table.ForeignKey("FK_Relations_Persons_SourcePerson", t => t.SourcePerson, "Persons", "Id");
                   table.ForeignKey("FK_Relations_Persons_TargetPerson", t => t.TargetPerson, "Persons", "Id");
                   table.ForeignKey("FK_Relations_Persons_SecondParent", t => t.SecondParent, "Persons", "Id");
               });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable("Relations");
            migrationBuilder.DropTable("CustomPersonDescriptions");
            migrationBuilder.DropTable("Persons");
            migrationBuilder.DropTable("CustomPersonDescriptionTemplates");
            migrationBuilder.DropTable("GenTrees");
            migrationBuilder.DropTable("GenTreeDateTimeSettings");
        }
    }
}