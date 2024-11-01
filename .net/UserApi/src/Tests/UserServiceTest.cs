using Moq;
using UserApi.Entites;
using UserApi.Repositories.Interfaces;
using UserApi.Services;
using Xunit;

namespace UserApi.Tests.Services
{
    public class UserServiceTests
    {
        private readonly Mock<IUserRepository> _userRepositoryMock;
        private readonly UserService _userService;

        public UserServiceTests()
        {
            _userRepositoryMock = new Mock<IUserRepository>();
            _userService = new UserService(_userRepositoryMock.Object);
        }

        [Fact]
        public void GetAll_ShouldReturnAllUsers()
        {
            // Arrange
            var users = new List<User> { new User { Id = "1", Name = "John", Email = "john@example.com" } };
            _userRepositoryMock.Setup(repo => repo.GetAll()).Returns(users);

            // Act
            var result = _userService.GetAll();

            // Assert
            Assert.Equal(users, result);
        }

        [Fact]
        public void GetById_ShouldReturnUser()
        {
            // Arrange
            var user = new User { Id = "1", Name = "John", Email = "john@example.com" };
            _userRepositoryMock.Setup(repo => repo.GetById("1")).Returns(user);

            // Act
            var result = _userService.GetById("1");

            // Assert
            Assert.Equal(user, result);
        }

        // Adicione mais testes para Create, Update e Delete
    }
}