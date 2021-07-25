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
using Microsoft.AspNetCore.Cors;

namespace dissertation_api.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowOrigin")]
    public class PlantController : ControllerBase
    {
        private string connectionString = "Server=tcp:masters-dissertation.database.windows.net,1433;Initial Catalog=plants;Persist Security Info=False;User ID=am558;Password=Plants123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";


        // GET: api/Plant
        //  returns all the data in the db ordered by the PlantID
        [HttpGet]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<IEnumerable<Plant>>> GetAllPlants()
        {

            List<Plant> plantList = new List<Plant>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(
                    @"SELECT * FROM dbo.Plant ORDER BY PlantID", connection);
                command.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    //gather all values from row
                    int plantID = Convert.ToInt32(reader["plantID"]);
                    // TODO - fix datetime
                    DateTime datetimeRecorded = Convert.ToDateTime(reader["datetimeRecorded"]);
                    float leafTemp = (float)Convert.ToDouble(reader["leafTemp"]);
                    float ambientTemp = (float)Convert.ToDouble(reader["ambientTemp"]);
                    float soilMoisture = (float)Convert.ToDouble(reader["soilMoisture"]);
                    float redStrength = (float)Convert.ToDouble(reader["redStrength"]);
                    float greenStrength = (float)Convert.ToDouble(reader["greenStrength"]);
                    float blueStrength = (float)Convert.ToDouble(reader["blueStrength"]);
                    float lightnessStrength = (float)Convert.ToDouble(reader["lightnessStrength"]);
                    float greenMagentaStrength = (float)Convert.ToDouble(reader["greenMagentaStrength"]);
                    float blueYellowStrength = (float)Convert.ToDouble(reader["blueYellowStrength"]);
                    float hueStrength = (float)Convert.ToDouble(reader["hueStrength"]);
                    float saturationStrength = (float)Convert.ToDouble(reader["saturationStrength"]);
                    float valueStrength = (float)Convert.ToDouble(reader["valueStrength"]);

                    //create plant object
                    Plant p = new Plant(plantID, datetimeRecorded, leafTemp, ambientTemp, soilMoisture, redStrength,
                        greenStrength, blueStrength, lightnessStrength, greenMagentaStrength, blueYellowStrength,
                        hueStrength, saturationStrength, valueStrength);

                    //add plant object to plant list to return
                    plantList.Add(p);
                }
                connection.Close();
            }

            return plantList;
        }

        // GET: api/Plant/5
        //  returns a list of all the data on one plant
        [HttpGet("{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<IEnumerable<Plant>>> GetPlant(int id)
        {

            List<Plant> plantList = new List<Plant>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(
                    @"SELECT * FROM dbo.Plant WHERE plantID= '" + id + "' ORDER BY datetimeRecorded ASC", connection);
                command.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                while (reader.Read())
                {
                    //gather all values from row
                    int plantID = Convert.ToInt32(reader["plantID"]);
                    // TODO - fix datetime
                    DateTime datetimeRecorded = Convert.ToDateTime(reader["datetimeRecorded"]);
                    float leafTemp = (float)Convert.ToDouble(reader["leafTemp"]);
                    float ambientTemp = (float)Convert.ToDouble(reader["ambientTemp"]);
                    float soilMoisture = (float)Convert.ToDouble(reader["soilMoisture"]);
                    float redStrength = (float)Convert.ToDouble(reader["redStrength"]);
                    float greenStrength = (float)Convert.ToDouble(reader["greenStrength"]);
                    float blueStrength = (float)Convert.ToDouble(reader["blueStrength"]);
                    float lightnessStrength = (float)Convert.ToDouble(reader["lightnessStrength"]);
                    float greenMagentaStrength = (float)Convert.ToDouble(reader["greenMagentaStrength"]);
                    float blueYellowStrength = (float)Convert.ToDouble(reader["blueYellowStrength"]);
                    float hueStrength = (float)Convert.ToDouble(reader["hueStrength"]);
                    float saturationStrength = (float)Convert.ToDouble(reader["saturationStrength"]);
                    float valueStrength = (float)Convert.ToDouble(reader["valueStrength"]);

                    //create plant object
                    Plant p = new Plant(plantID, datetimeRecorded, leafTemp, ambientTemp, soilMoisture, redStrength,
                        greenStrength, blueStrength, lightnessStrength, greenMagentaStrength, blueYellowStrength,
                        hueStrength, saturationStrength, valueStrength);

                    //add plant object to plant list to return
                    plantList.Add(p);
                }
                connection.Close();
            }

            return plantList;
        }

        // GET: api/Plant/mostRecent/5
        //  returns minutes since last data reading
        [HttpGet("mostRecent/{id}")]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<double>> GetMostRecentDate(int id)
        {

            DateTime datetimeRecorded = new DateTime();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(
                    @"SELECT * FROM dbo.Plant WHERE plantID= '" + id + 
                    "' ORDER BY datetimeRecorded DESC", connection);
                command.CommandType = CommandType.Text;

                connection.Open();
                SqlDataReader reader = command.ExecuteReader();

                

                while (reader.Read())
                {
                    datetimeRecorded = Convert.ToDateTime(reader["datetimeRecorded"]);
                    break;
                }
                connection.Close();
            }

            DateTime startTime = datetimeRecorded;
            TimeZoneInfo bstZone = TimeZoneInfo.FindSystemTimeZoneById("GMT Standard Time");
            DateTime endTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, bstZone);

            TimeSpan span = endTime.Subtract(startTime);
            return span.TotalMinutes;
        }

        // POST: api/Plant
        //  takes in plantID, datetimeRecorded, leafTemp, ambientTemp, soilMoisture, and 9 color strengths
        //  adds one row to the db
        [HttpPost]
        [EnableCors("AllowOrigin")]
        public async Task<ActionResult<Plant>> PostPlant(int plantID, DateTime datetimeRecorded, float leafTemp, float ambientTemp,
            float soilMoisture, float redStrength, float greenStrength, float blueStrength, float lightnessStrength,
            float greenMagentaStrength, float blueYellowStrength, float hueStrength, float saturationStrength, float valueStrength)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(
                    @"INSERT INTO dbo.Plant VALUES(" +
                    plantID + "," + "'" + datetimeRecorded + "'"+ "," + leafTemp + "," + ambientTemp + "," + soilMoisture + "," +
                    redStrength + "," + greenStrength + "," + blueStrength + "," + lightnessStrength + "," + greenMagentaStrength
                     + "," + blueYellowStrength + "," + hueStrength + "," + saturationStrength + "," +
                     valueStrength + ")", connection);

                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();

            }

            //create plant object to return in created at action
            Plant plant = new Plant(plantID, datetimeRecorded, leafTemp, ambientTemp, soilMoisture, redStrength,
                        greenStrength, blueStrength, lightnessStrength, greenMagentaStrength, blueYellowStrength,
                        hueStrength, saturationStrength, valueStrength);
            return CreatedAtAction("PostPlant", new { id = plant.plantID }, plant);
        }
    }
}
