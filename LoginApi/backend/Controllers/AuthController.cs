using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private static readonly string _usersFilePath = "users.json";

        // Helper method to read users from JSON file
        private List<User> GetUsersFromFile()
        {
            using (var jsonStream = System.IO.File.OpenRead(_usersFilePath))
            {
                return JsonSerializer.Deserialize<List<User>>(jsonStream);
            }
        }

        // Helper method to save users to JSON file
        private void SaveUsersToFile(List<User> users)
        {
            var options = new JsonSerializerOptions { WriteIndented = true };
            var jsonBytes = JsonSerializer.SerializeToUtf8Bytes(users, options);
            System.IO.File.WriteAllBytes(_usersFilePath, jsonBytes);
        }

        [HttpPost("login")]
        public IActionResult Login(LoginRequest request)
        {
            var users = GetUsersFromFile();
            var user = users.FirstOrDefault(u => u.Email == request.Email && u.Password == request.Password);

            if (user != null)
            {
                return Ok(new { user.Name });
            }
            else
            {
                return Unauthorized();
            }
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterRequest request)
        {
            var users = GetUsersFromFile();
            var existingUser = users.FirstOrDefault(u => u.Email == request.Email);

            if (existingUser != null)
            {
                return Conflict("Email already exists");
            }

            var newUser = new User
            {
                Email = request.Email,
                Password = request.Password,
                Name = request.Name
            };

            users.Add(newUser);
            SaveUsersToFile(users);

            return CreatedAtAction(nameof(Login), new { email = newUser.Email }, newUser);
        }
    }
}
