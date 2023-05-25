using System.ComponentModel.DataAnnotations;

namespace HLCV.App.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public string? Password { get; set; }
    }
}
