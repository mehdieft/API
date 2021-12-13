using API.Data;
using API.Dtos;
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
        public ActionResult<AppUser> Register(RegisterDto registerDto )
        {
            //dto is object we create in backend and we exept that request body be like it
            if (UserExist(registerDto.Username)) return BadRequest("username has been token");

            using var hmac = new HMACSHA512();
            var user = new AppUser
            {
                UserName = registerDto.Username.ToLower(),
                Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.password)),
                passwordSalt = hmac.Key

            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }
        private bool UserExist(string username)
        {
            return _context.Users.Any(u => u.UserName == username.ToLower());
        }


    }
}
