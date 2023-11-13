using EksamenApi.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace EksamenApi.Models;

public class VideoGame : IVideoGame
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = "Not set";
    public string Platform { get; set; } = "Not set";
    public int ReleaseYear { get; set; }
    public string Image { get; set; } = "Not set";
    public string Developer { get; set; } = "Not set";
    public string Publisher { get; set; } = "Not set";
    public string Genre { get; set; } = "Not set";
    public int ReviewScore { get; set; }
}