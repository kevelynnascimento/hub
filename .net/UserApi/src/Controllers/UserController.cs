using Microsoft.AspNetCore.Mvc;
using UserApi.Entites;
using UserApi.Services.Interfaces;

namespace UserApi.Controllers;

[Route("api/users")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public ActionResult<IEnumerable<User>> Get() => Ok(_userService.GetAll());

    [HttpGet("{id}")]
    public ActionResult<User> Get(string id)
    {
        var user = _userService.GetById(id);
        if (user == null)
            return NotFound();
        return Ok(user);
    }

    [HttpPost]
    public ActionResult Create([FromBody] User user)
    {
        _userService.Create(user);
        return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
    }

    [HttpPut("{id}")]
    public IActionResult Update(string id, [FromBody] User user)
    {
        var existingUser = _userService.GetById(id);
        if (existingUser == null)
            return NotFound();
        _userService.Update(id, user);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(string id)
    {
        var user = _userService.GetById(id);
        if (user == null)
            return NotFound();
        _userService.Delete(id);
        return NoContent();
    }
}
