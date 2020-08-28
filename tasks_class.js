Class Task{
  constructor(name, priority, due_date, is_continuous, is_fixed, start_time){
    this.name = name; //Name of task
    this.priority = priority; //Priority rank
    this.due_date = due_date; //Date/time task must be finished
    this.is_continuous = is_continuous; //Determines if task is weekly
    this.is_fixed = is_fixed; //Determines if the task must be completed in a fixed frame
    this.start_time = start_time; //Only relevant for fixed tasks
  }
}
