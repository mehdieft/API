using API.Data;
using API.Dtos;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]


    public class AccountController: ControllerBase
    {
    private readonly DataContext _context;
        private readonly Itoken _tokenService;

        public AccountController(DataContext context,Itoken tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }
        //[HttpPost]
        //you have to naming inside this shit
        [HttpPost("register")]
        public ActionResult<UserDto> Register(RegisterDto registerDto )
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
            return new UserDto{
                username=user.UserName,
                Token=_tokenService.CreateToken(user)


            };
        }
        private bool UserExist(string username)
        {
            return _context.Users.Any(u => u.UserName == username.ToLower());
        }



        [HttpPost("login")]
        public ActionResult<UserDto> Login(LoginDto loginDto)
        {
            var user =  _context.Users.SingleOrDefault(x => x.UserName == loginDto.Username);
            if(user== null) return Unauthorized("invalid user name");


            using var hmac = new HMACSHA512(user.passwordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.Password[i]) return Unauthorized("invalid password");
            }
            return new UserDto{
                username=user.UserName,
                Token=_tokenService.CreateToken(user)

            };
              
        }

    }
}
