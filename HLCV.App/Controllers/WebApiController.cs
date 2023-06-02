using HLCV.App.BLL;
using HLCV.App.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata.Ecma335;

namespace HLCV.App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class WebApiController : Controller
    {
        private readonly DataContext datacontext;
        public WebApiController(DataContext context) 
        {
            datacontext = context;
        }

        [HttpPost("Register")]
        public ActionResult Register(string password)
        {
            try
            {
                var userExists = new Logic(datacontext).Register(password);
                if (userExists)
                {
                    return Ok("User is Added");
                }
                else
                {
                    throw new Exception();
                }
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
        }

        [HttpPost("Login")]
        public ActionResult Login(int Id, string password)
        {
            try
            {
                var userExists = new Logic(datacontext).Login(Id, password);
                if (userExists)
                {
                    return Ok("User is Authenticayed");
                }
                else
                {
                    throw new Exception();
                }
            }
            catch (Exception ex)
            {
                throw new Exception();
            }
        }

        [HttpPost("AddBooking")]
        public ActionResult AddBooking(Booking booking)
        {
            try
            {
                new Logic(datacontext).AddBooking(booking);
                return Ok("Added Booking Details Successfully");
            }catch(Exception ex)
            {
                return NotFound("Couldn't Add Booking Details");
            }
            
        }
        [HttpGet("GetAllBookingDetails")]
        public ActionResult GetAllBookingDetails()
        {
            try
            {
                var result = new Logic(datacontext).GetAllBookingDetails();
                return Ok(result);
            }catch(Exception ex) 
            {
                return NotFound("Couldn't Retreive Booking details");
            }
        }

        [HttpDelete("ProceedOrCancelBooking")]
        public ActionResult ProceedOrCancelBooking(Booking booking) 
        {
            try 
            {
                new Logic(datacontext).ProceedOrCancelBooking(booking);
                return Ok("Cancelled or Removed Booking");
            }catch(Exception ex) 
            {
                return NotFound("Couldn't cancel Booking");
            }
            
        }
    }
}
