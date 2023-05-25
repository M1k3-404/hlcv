using Microsoft.EntityFrameworkCore;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HLCV.App.Model
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? BookingCode { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? NIC { get; set; }
        public string? Email { get; set; }
        public string? MobileNumber { get; set; }
        public int? NumberOfPeople { get; set; }
        public DateTime Arrival { get; set; }
        public DateTime Departure { get; set; }
<<<<<<< HEAD
        public double TotalAmount { get; set;}
=======
        public double? TotalAmount { get; set; }
        [NotMapped]
        public List<int>? Quantity { get; set; }

>>>>>>> bf724a06679191d357e68ffd70ac4bb5e2b47d36
    }
}
