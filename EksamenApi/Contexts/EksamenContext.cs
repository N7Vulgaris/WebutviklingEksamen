#nullable disable
using Microsoft.EntityFrameworkCore;

namespace EksamenApi.Contexts;

public class EksamenContext : DbContext
{

    public EksamenContext(DbContextOptions<EksamenContext> options):base(options){}

    public DbSet<EksamenApi.Models.VideoGame> VideoGames { get; set; }

}