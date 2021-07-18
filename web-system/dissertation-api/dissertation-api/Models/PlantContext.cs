using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using Microsoft.EntityFrameworkCore;

namespace dissertation_api.Models
{
    public class PlantContext : DbContext
    {
        public PlantContext(DbContextOptions<PlantContext> options)
            : base(options)
        {
        }

        public DbSet<Plant> Plant { get; set; }
    }
}
