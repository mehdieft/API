using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
       [MinLength(8,ErrorMessage ="min length have to be 8")]

        public string password { get; set; }
    }
}
