using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace HLCV.App.Model
{
    public class DataContext: DbContext
    {
        public DataContext() 
        { 
        }
        public DataContext(DbContextOptions<DbContext> options): base(options)
        { 
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server = DESKTOP-EQQEGB1; Database = HLCV_DB; Trusted_Connection = true; TrustServerCertificate = true");
        }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<RoomType> RoomTypes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<BookingOrder> BookingOrders { get; set; }
    }
}
