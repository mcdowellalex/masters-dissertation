using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dissertation_api.Models;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Options;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {

        private string connectionString = "Server=tcp:masters-dissertation.database.windows.net,1433;Initial Catalog=plants;Persist Security Info=False;User ID=am558;Password=Plants123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";



        // GET: api/Test
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Test>>> GetAllTests()
        {

            List<Test> testList = new List<Test>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(
                    @"SELECT * FROM dbo.Test", connection);
                command.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    int id = Convert.ToInt32(reader["TestID"]);
                    int number = Convert.ToInt32(reader["someNumber"]);
                    Test t = new Test(id, number);
                    testList.Add(t);
                }
                connection.Close();
            }

            return testList;
        }

        // GET: api/Test/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Test>> GetTest(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(
                    @"SELECT * FROM dbo.Test", connection);
                command.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    int check_id = Convert.ToInt32(reader["TestID"]);
                    if (check_id == id)
                    {
                        int number = Convert.ToInt32(reader["someNumber"]);
                        Test test = new Test(id, number);
                        return test;
                    }
                    
                }
                connection.Close();
            }
            return NotFound();  
        }

        // POST: api/Tests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Test>> PostTest(int id, int number)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(
                    @"INSERT INTO dbo.Test VALUES(" +
                    id + "," + number + ")", connection);

                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();
                 
            }

            Test test = new Test(id, number);
            return CreatedAtAction("GetTest", new { id = test.id }, test);
        }
    }
}
