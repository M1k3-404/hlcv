using HLCV.App.Model;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.Design;
using System.Diagnostics;
using System.Linq;

namespace HLCV.App.BLL
{
    public class Logic
    {
        private readonly DataContext context;
        public Logic(DataContext dataContext ) { 
            
            context = dataContext;
        }
        public void AddBooking(Booking booking)
        {
            context.Add(booking);
            context.SaveChanges();
            int count = 0;
            foreach (var item in booking.Quantity) 
            {
                count++;
                var bookingOrder = new BookingOrder
                {
                    BookingOrderId = booking.Id,
                    RoomTypeId = count,
                    Quantity = item,
                };
                context.Add(bookingOrder);
            }
            context.SaveChanges(); 
        }

        public List<Booking> GetAllBookingDetails()
        {
            var bookingList=context.Bookings.ToList();
            foreach (var item in bookingList) 
            {
                Debug.WriteLine( "Count"+context.BookingOrders.ToList().Count);

                var listOfBookingOrders=context.BookingOrders.Where(x=>x.BookingOrderId == item.Id);
                item.Quantity = new List<int>();
                foreach (var value in listOfBookingOrders) 
                {
                    item.Quantity.Add(value.Quantity);
                }
            } 
            return bookingList;
        }

        public void ProceedOrCancelBooking(Booking booking) {
            var listOfBookOrders=context.BookingOrders.Where(x=> x.BookingOrderId == booking.Id);
            foreach (var item in listOfBookOrders) 
            {
                context.Remove(item);
            }
            context.Remove(booking);
            context.SaveChanges();
        }
    }
}
