<<<<<<< HEAD
using HLCV.App.Model;

var builder = WebApplication.CreateBuilder(args);
=======
using HLCV.App;
using Microsoft.EntityFrameworkCore;
>>>>>>> 733503bff5fe811ecb0c21c0c5a06dde4d5c1c68

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<DataContext>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

builder.Services.AddDbContext<DBContextClass>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("HLCVDB"));
});

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
