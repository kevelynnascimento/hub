using Api.Entites;

namespace Domain.Services.Interfaces;

public interface IUserService
{
    IEnumerable<User> GetAll();
    User GetById(string id);
    void Create(User user);
    void Update(string id, User user);
    void Delete(string id);
}