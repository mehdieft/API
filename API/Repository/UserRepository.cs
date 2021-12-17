using API.Data;
using API.Entities;
using API.Interfaces;
using System.Data.Entity;
using System.Linq;

namespace API.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        public UserRepository(DataContext context)
        {
            _context = context;
        }
        public AppUser GetById(int id)
        {
            return _context.Users.Find(id);
        }

        public AppUser GetByUsename(string id)
        {
            return _context.Users.SingleOrDefault(x => x.UserName == id);
        }

        public IEnumerable<AppUser> GetUsers()
        {
            return _context.Users.ToList();
        }

        public bool saveAll()
        {
            return _context.SaveChanges() > 0;
        }

        public void Update(AppUser user)
        {
            _context.Entry(user).State = (Microsoft.EntityFrameworkCore.EntityState)EntityState.Modified;
        }
    }
}
