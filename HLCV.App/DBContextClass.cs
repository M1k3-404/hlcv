using Microsoft.EntityFrameworkCore;

namespace HLCV.App
{
    public class DBContextClass : DbContext
    {
        public DBContextClass(DbContextOptions<DBContextClass> contextOptions) : base(contextOptions)
        {
        }
    }
}
