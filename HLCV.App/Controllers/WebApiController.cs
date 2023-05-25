using HLCV.App.BLL;
using HLCV.App.Model;
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
