using HLCV.App.Model;
using System.ComponentModel.Design;

namespace HLCV.App.BLL
{
    public class Logic
    {


        public void Checkout(Booking booking)
        {
            //Get Number of days between 
            var numberOfDays = (booking.Departure - booking.Arrival).TotalDays;
            //Calculate Total
            double total = 0;
            foreach (var room in booking.RoomSelectected) 
            { 

                total += room.Quantity*room.RoomType
            }

        }

        public void Book()
        {

        }

        public Booking GetAllBookingDetails()
        {
            return Booking;
        }

        public void proceed() { 

        }

        public void cancel() { 
        
        }
    }
}
