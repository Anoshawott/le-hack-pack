class Time_Block{
  constructor(start, end, is_full, task){
    this.start = start; //Block start time
    this.end = end; //Block end time
    this.is_full = is_full; //Has this block been assigned with a task?
    this.task = task; //Task assigned
  }
}
