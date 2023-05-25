using System.ComponentModel.DataAnnotations;

namespace HLCV.App.Model
{
    public class RoomType
    {
        [Key]
        public int Id { get; set; }
        public string? RoomTitle { get; set; }
        public double Price { get; set; }
    }
}
