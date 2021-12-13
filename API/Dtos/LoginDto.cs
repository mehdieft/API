using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class LoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [MinLength(8,ErrorMessage ="password must be more than 8 ")]
        public string Password { get; set; }
    }
}
