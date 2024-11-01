using UserApi.Entites;
using UserApi.Repositories.Interfaces;
using UserApi.Services.Interfaces;

namespace UserApi.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public IEnumerable<User> GetAll() => _userRepository.GetAll();

    public User GetById(string id) => _userRepository.GetById(id);

    public void Create(User user) => _userRepository.Create(user);

    public void Update(string id, User user) => _userRepository.Update(id, user);

    public void Delete(string id) => _userRepository.Delete(id);
}
