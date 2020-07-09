using Microsoft.EntityFrameworkCore;

namespace GenTreesCore.Entities
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            if (!Database.CanConnect())
                throw new System.Exception("No connection to server");
        }
    }
}
