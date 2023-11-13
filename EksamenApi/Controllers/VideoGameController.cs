#nullable disable
using EksamenApi.Models;
using EksamenApi.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EksamenApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VideoGameController : ControllerBase
{
    private readonly EksamenContext _context;
    public VideoGameController(EksamenContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<VideoGame>>> Get()
    {
        List<VideoGame> videoGames = await _context.VideoGames.ToListAsync();
        return videoGames;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<VideoGame>> Get(int id)
    {
        VideoGame videoGameById = await _context.VideoGames.FindAsync(id);
        if(videoGameById != null){
            return Ok(videoGameById);
        }else{
            return NotFound();
        }
    }

    [HttpGet]
    [Route("[action]/{title}")]
    public async Task<ActionResult<List<VideoGame>>> GetByTitle(string title)
    {
        List<VideoGame> videoGames = await _context.VideoGames.ToListAsync();
        List<VideoGame> videoGamesByTitle = videoGames.FindAll(videoGame => videoGame.Title.ToLower() == title);
        if(videoGamesByTitle != null){
            return Ok(videoGamesByTitle);
        }else{
            return NotFound();
        }
    }

    [HttpGet]
    [Route("[action]/{platform}")]
    public async Task<ActionResult<List<VideoGame>>> GetByPlatform(string platform)
    {
        List<VideoGame> videoGames = await _context.VideoGames.ToListAsync();
        List<VideoGame> videoGamesByPlatform = videoGames.FindAll(videoGame => videoGame.Platform.ToLower() == platform);
        if(videoGamesByPlatform != null){
            return Ok(videoGamesByPlatform);
        }else{
            return NotFound();
        }
    }

    [HttpGet]
    [Route("[action]/{developer}")]
    public async Task<ActionResult<List<VideoGame>>> GetByDeveloper(string developer)
    {
        List<VideoGame> videoGames = await _context.VideoGames.ToListAsync();
        List<VideoGame> videoGamesByDeveloper = videoGames.FindAll(videoGame => videoGame.Developer.ToLower() == developer);
        if(videoGamesByDeveloper != null){
            return Ok(videoGamesByDeveloper);
        }else{
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<ActionResult<VideoGame>> Post(VideoGame newVideoGame)
    {
        _context.VideoGames.Add(newVideoGame);
        await _context.SaveChangesAsync();
        return CreatedAtAction("Get", new {id = newVideoGame.Id}, newVideoGame );
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        VideoGame videoGameToDelete = await _context.VideoGames.FindAsync(id);
        if(videoGameToDelete != null){
            _context.VideoGames.Remove(videoGameToDelete);
            await _context.SaveChangesAsync();
        }
        return NoContent();
    }

    [HttpPut]
    public async Task<IActionResult> Put(VideoGame videoGameToEdit)
    {
        _context.Entry(videoGameToEdit).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }
}