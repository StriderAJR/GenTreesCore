using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GenTreesCore.Entities
{
    public class ApplicationContext : DbContext
    {
        public DbSet<GenTree> GenTrees { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<GenTreeDateTimeSetting> GenTreeDateTimeSettings { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            if (!Database.CanConnect())
                throw new System.Exception("No connection to server");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Relation>()
                .ToTable("Relations");

            modelBuilder.Entity<Relation>()
                .HasDiscriminator<string>("RelationType")
                .HasValue<ChildRelation>("ChildRelation")
                .HasValue<SpouseRelation>("SpouseRelation");

            modelBuilder.Entity<ChildRelation>()
                .Property(e => e.RelationRate)
                .HasConversion(v => v.ToString(), v => (RelationRate)Enum.Parse(typeof(RelationRate), v))
                .HasColumnName("RelationRate");

            modelBuilder.Entity<CustomPersonDescriptionTemplate>()
                .ToTable("CustomPersonDescriptionTemplates");

            modelBuilder.Entity<CustomPersonDescription>()
                .ToTable("CustomPersonDescriptions");

            modelBuilder.Entity<Person>()
                .ToTable("Persons");

            modelBuilder.Entity<Person>()
                .HasMany(e => e.Relations)
                .WithOne()
                .HasForeignKey("SourcePersonId");

            modelBuilder.Entity<Person>()
                .Property(e => e.BirthDate)
                .HasColumnName("BirthDate_json");

            modelBuilder.Entity<Person>()
                .Property(e => e.DeathDate)
                .HasColumnName("DeathDate_json");

            modelBuilder.Entity<GenTreeDateTimeSetting>()
                .Property(e => e.Eras)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<List<GenTreeEra>>(v))
                .HasColumnName("Eras_json");

            modelBuilder.Entity<CustomPersonDescription>()
                .Property(e => e.Value)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject(v));

            modelBuilder.Entity<Person>()
                .Property(e => e.BirthDate)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<GenTreeDateTime>(v));

            modelBuilder.Entity<Person>()
                .Property(e => e.DeathDate)
                .HasConversion(v => JsonConvert.SerializeObject(v), v => JsonConvert.DeserializeObject<GenTreeDateTime>(v));

            base.OnModelCreating(modelBuilder);
        }
    }
}
