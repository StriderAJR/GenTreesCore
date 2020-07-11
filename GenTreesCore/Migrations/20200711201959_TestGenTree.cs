using GenTreesCore.Services;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GenTreesCore.Migrations
{
    public partial class TestGenTree : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                "GenTreeDateTimeSettings",
                new string[] { "Id","Name", "Eras_json", "YearMonthCount" },
                new object[] { 1,"TestSetting", "", 12 }
            );
            migrationBuilder.InsertData(
                "GenTrees",
                new string[] { "Id", "Name","OwnerId", "DateTimeSettingsId", "IsPrivate"},
                new object[] { 1, "TestGenTree", 1, 1, false}
            );
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData("GenTrees", "Id", 1);
            migrationBuilder.DeleteData("GenTreeDateTimeSettings", "Id", 1);
        }
    }
}
