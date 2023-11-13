namespace EksamenApi.Interfaces;

interface IVideoGame
{
    int Id { get; set; }
    string Title { get; set; }
    string Platform { get; set; }
    int ReleaseYear { get; set; }
    string Image { get; set; }
    string Developer { get; set; }
    string Publisher { get; set; }
    string Genre { get; set; }
    int ReviewScore { get; set; }
}