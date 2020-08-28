import Task from "tasks_class"

/*
* PRETTY MUCH JUST PSEUDO CODE FOR INPUT FOR REFERENCE SINCE I WAS HALF ASLEEP
*/


var tasks = window.prompt("Enter number of tasks: ");
tasks = parseInt(tasks);
for(var i = 0; i<tasks; i++){
  var name = window.prompt("Task name: ");
  var due = window.prompt("Due by: ");
  var fixed = window.prompt("Fixed status: ");
  if(fixed == "0"){
    var priority = window.prompt("Priority rank: ");
    Task temp = new Task();
  }
  else{
    var start = window.prompt("Start time: ");
    Task temp = new Task();
    //Schedule task (code in scheduler)
    //if clash give warning

  }


}
