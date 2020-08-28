/*
 * Schedule Handler:
 *    Uses a list of tasks and a list of all time_blocks to
 *    assign all tasks to an appropriate time slot starting by fixed tasks (Tasks which must be completed in a pre assigned period)
 */

Class Scheduler(){
  constructor(time_blocks, tasks){
    this.time_blocks = time_blocks; //Sorted list earliest->latest
    this.tasks = tasks;
  }


  /*
   * Handles fixed task assignments
   * *STILL NEEDS COLLISION HANDLEING*
   */
  void fixed_tasks(to_schedule){
      for(var i = 0; i<this.time_blocks.lenght; i++){
        if(to_schedule.start_time >= this.time_blocks[i].start && to_schedule.end_time <= this.time_blocks[i].end){ //Identify time blocks in the task duration period
          this.time_blocks[i].is_full = 1; //Assign task to block
          this.time_blocks[i].task = to_schedule; //Assign task to block
          if(this.time_blocks[i].end >= to_schedule.due_date){ //Last block in task
            return;
          }
        }
      }
  };

  void create_schedule(){
    //Fixed tasks first
    for(var i = 0; i<this.tasks.length, i++){
      if(this.tasks[i].is_fixed == 1){
        fixed_tasks(tasks[i]);
      }
    }
  }


}
