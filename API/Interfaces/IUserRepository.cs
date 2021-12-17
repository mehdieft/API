using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        bool saveAll();

        IEnumerable<AppUser> GetUsers();
        AppUser GetById(int id);

        AppUser GetByUsename(string id);
    }
}
