namespace TaskManager.Api.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Task { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
    }
}
