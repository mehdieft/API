using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]


    public class AccountController: ControllerBase
    {
    private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }
        //[HttpPost]
        //you have to naming inside this shit
        [HttpPost("register")]
        public ActionResult<AppUser> Register([FormBody] )
        {
            return request
            // using var hmac =new HMACSHA512();
            // var user = new AppUser
            // {
            //     UserName = username,
            //     Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
            //     passwordSalt=hmac.Key
                
            // };
            // _context.Users.Add(user);
            // _context.SaveChanges();
            // return user;
        }
       

    }
}
