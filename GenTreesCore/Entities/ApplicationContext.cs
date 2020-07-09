using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GenTreesCore.Entities
{
    public class ApplicationContext : DbContext
    {
        DbSet<GenTree> GenTrees { get; set; }
        DbSet<User> Users { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            if (!Database.CanConnect())
                throw new System.Exception("No connection to server");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Relation>()
                .HasDiscriminator<string>("RelationType")
                .HasValue<ChildRelation>("ChildRelation")
                .HasValue<SpouseRelation>("SpouseRelation");

            modelBuilder.Entity<GenTreeDateTimeSetting>()
                .Property(e => e.Eras)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<GenTreeEra>>(v));

            modelBuilder.Entity<CustomPersonDescription>()
                .Property(e => e.Value)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject(v));

            modelBuilder.Entity<Person>()
                .Property(e => e.BirthDate)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<GenTreeDateTime>(v));

            modelBuilder.Entity<Person>()
                .Property(e => e.DeathDate)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<GenTreeDateTime>(v));
            
        }
    }
}
