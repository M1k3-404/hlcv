using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HLCV.App.Model
{
    public class BookingOrder
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Booking")]
        public int BookingOrderId  { get; set; }
        [ForeignKey("RoomType")]
        public int RoomTypeId { get; set; }
        public int Quantity { get; set; }
    }
}
