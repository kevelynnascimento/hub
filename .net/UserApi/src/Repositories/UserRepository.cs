using MongoDB.Driver;
using UserApi.Entites;
using UserApi.Repositories.Interfaces;

namespace UserApi.Repositories;

public class UserRepository : IUserRepository
{
    private readonly IMongoCollection<User> _users;

    public UserRepository(IMongoDatabase database)
    {
        _users = database.GetCollection<User>("Users");
    }

    public IEnumerable<User> GetAll() => _users.Find(user => true).ToList();

    public User GetById(string id) => _users.Find<User>(user => user.Id == id).FirstOrDefault();

    public void Create(User user) => _users.InsertOne(user);

    public void Update(string id, User user) => _users.ReplaceOne(u => u.Id == id, user);

    public void Delete(string id) => _users.DeleteOne(user => user.Id == id);
}
