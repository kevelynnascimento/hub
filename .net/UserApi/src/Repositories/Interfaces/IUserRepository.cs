using UserApi.Entites;

namespace UserApi.Repositories.Interfaces;

public interface IUserRepository
{
    IEnumerable<User> GetAll();
    User GetById(string id);
    void Create(User user);
    void Update(string id, User user);
    void Delete(string id);
}