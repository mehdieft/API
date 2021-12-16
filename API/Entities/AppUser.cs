using API.Extensions;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] Password { get; set; }
        public byte[] passwordSalt { get; set; }
        public string KnownAs { get; set; }
        public DateTime BirthOfDate { get; set; }

        public DateTime Created { get; set; }= DateTime.Now;
        public DateTime LastActive { get; set; }= DateTime.Now;
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<Photo> photoes {get;set;} 

        public int GetAge()
        {
            return BirthOfDate.CalculateAge();
        }

    }
}

