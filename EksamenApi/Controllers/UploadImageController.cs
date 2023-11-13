using Microsoft.AspNetCore.Mvc;

namespace EksamenApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UploadImageController : ControllerBase
{
    private readonly IWebHostEnvironment _hosting;

    public UploadImageController(IWebHostEnvironment hosting)
    {
        _hosting = hosting;
    }

    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
        string wwwrootPath = _hosting.WebRootPath;
        string absolutePath = Path.Combine($"{wwwrootPath}/uploadedImages/{file.FileName}");

        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }

        return Ok();
    }
}