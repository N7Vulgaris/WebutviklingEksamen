using EksamenApi.Contexts;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAll",
            builder => builder
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin()
        );
    }
);

builder.Services.AddDbContext<EksamenContext>(options => options.UseSqlite("Data Source=VideoGames.db") );
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAll");

DefaultFilesOptions options = new DefaultFilesOptions();
options.DefaultFileNames.Add("index.html");
app.UseDefaultFiles(options);
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
