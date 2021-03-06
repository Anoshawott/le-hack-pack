import Time_Block from "time_block"
import Fixed_Task from "fixed_tasks_class"
import Task from "tasks_class"

/*
 * Schedule Handler:
 *    Uses a list of tasks and a list of all time_blocks to
 *    assign all tasks to an appropriate time slot starting by fixed tasks (Tasks which must be completed in a pre assigned period)
 */

class Scheduler {
  constructor(time_blocks, fixed_tasks){
    this.time_blocks = time_blocks; //Sorted list earliest->latest
    this.fixed_tasks = fixed_tasks;
  };


  /*
   * Handles fixed task assignments
   * *STILL NEEDS COLLISION HANDLING*
   OUTDATED!!!!!!
   */
   /*
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
  };*/

  /*
  * 0 = clash, 1 = no clash
  */

  
  check_availability(slots_check, num_slots){
    for(var i = 0; i<num_slots; i++){
      if(slots_check[i].is_full == 1){
        return 0;
      }
    }
    return 1;
  }

 /*
 * Schedules fixed tasks one at a time
 * to_schedule = single fixed task
 * time_slots = list of all time slots
 */
  schedule_fixed_tasks(to_schedule, time_slots){
    var i = 0;
    temp = time_slots[i];
    while(to_schedule.start_time>=temp.end_time){//Not in range
      i++;
      temp = time_slots[i];
    }

    need = [];


    while((to_schedule.start_time + to_schedule.duration) >=temp.end_time){
      need.push(temp);
      i++;
      temp = time_slots[i];
    }

    var valid = check_availability(need, need.length);

    if(valid = 0){
      //error handling
    }

    else{
      i = 0;
      while(i<need.length){
        need[i].task = to_schedule;
        need[i].is_full = 1;
      }
    }


  }

  create_schedule(){
    //Fixed tasks first
    for(var i = 0; i<this.fixed_tasks.length; i++) {
        schedule_fixed_tasks(this.fixed_tasks[i], this.time_slots);
    }
  }


}