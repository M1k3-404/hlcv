namespace HLCV.App.Model
{
    public class Booking
    {
        public int Id { get; set; }
        public string? BookingCode { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? NIC { get; set; }
        public string? MobileNumber { get; set; }
        public int NumberOfPeople { get; set; }
        public List<int>? RoomSelectected { get; set; }
        public DateTime? Arrival { get; set; }
        public DateTime? Departure { get; set; }
        public DateTime? TotalAmount { get; set;}

    }
}
