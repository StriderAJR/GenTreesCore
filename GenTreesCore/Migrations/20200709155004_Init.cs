using Microsoft.EntityFrameworkCore.Metadata;
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
                   Id = table.Column<int>()
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                   Name = table.Column<string>(maxLength: 100),
                   YearMonthCount = table.Column<uint>(),
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
                    Id = table.Column<int>()
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(),
                    Description = table.Column<string>(nullable: true),
                    GenTreeDateTimeSettingId = table.Column<int>(),
                    IsPrivate = table.Column<bool>()
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GenTrees", t => t.Id);
                    table.ForeignKey("FK_GenTrees_DateTimeSettings", t => t.GenTreeDateTimeSettingId, "GenTreeDateTimeSettings", "Id");
                });

            migrationBuilder.CreateTable(
               name: "Persons",
               columns: table => new
               {
                   Id = table.Column<int>()
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                   GenTreeId = table.Column<int>(),
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
                   table.ForeignKey("FK_Persons_GenTrees", t => t.GenTreeId, "GenTrees", "Id");
               });

            migrationBuilder.CreateTable(
              name: "CustomPersonDescriptionTemplates",
              columns: table => new
              {
                  Id = table.Column<int>()
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                  GenTreeId = table.Column<int>(),
                  Name = table.Column<string>(maxLength: 100)
              },
              constraints: table =>
              {
                  table.PrimaryKey("PK_CustomPersonsDescriptionTemplates", t => t.Id);
                  table.ForeignKey("FK_CustomPersonsDescriptionTemplates_GenTree", t => t.GenTreeId, "GenTrees", "Id");
              });

            migrationBuilder.CreateTable(
              name: "CustomPersonDescriptions",
              columns: table => new
              {
                  Id = table.Column<int>()
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                  PersonId = table.Column<int>(),
                  TemplateId = table.Column<int>(),
                  Value = table.Column<string>()
              },
              constraints: table =>
              {
                  table.PrimaryKey("PK_CustomPersonsDescriptions", t => t.Id);
                  table.ForeignKey("FK_CustomPersonsDescriptions_Templates", t => t.TemplateId, "CustomPersonDescriptionTemplates", "Id");
                  table.ForeignKey("FK_CustomPersonsDescriptions_Persons", t => t.PersonId, "Persons", "Id");
              });

            migrationBuilder.CreateTable(
               name: "Relations",
               columns: table => new
               {
                   Id = table.Column<int>()
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                   SourcePersonId = table.Column<int>(),
                   TargetPersonId = table.Column<int>(),
                   RelationType = table.Column<string>(maxLength: 100),
                   IsFinished = table.Column<bool>(nullable: true),
                   SecondParentId = table.Column<int>(nullable: true),
                   RelationRate = table.Column<string>(nullable: true)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Relations", t => t.Id);
                   table.ForeignKey("FK_Relations_Persons_SourcePerson", t => t.SourcePersonId, "Persons", "Id");
                   table.ForeignKey("FK_Relations_Persons_TargetPerson", t => t.TargetPersonId, "Persons", "Id");
                   table.ForeignKey("FK_Relations_Persons_SecondParent", t => t.SecondParentId, "Persons", "Id");
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