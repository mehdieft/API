using API.Entities;

namespace API.Interfaces
{
    public interface Itoken
    {
        string CreateToken(AppUser User);
    }
}
