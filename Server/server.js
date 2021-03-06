const mas = require('../master')
var master = new mas.Master()

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const port = 4000


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../Static/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../Static/', 'index.html'));
})

app.get('/schedule-task', (req, res) => {
    res.sendFile(path.join(__dirname,'../Static/', 'fixed_task.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'../Static/', 'about.html'));
})

app.get('/add-task', (req, res) => {
    res.sendFile(path.join(__dirname,'../Static/', '/add_task.html'));
})

/*
app.get('/api/calendarValues', function(req, res) {
    res.send(master.generateCalendar())
})
*/

// Fixed dictionary structure from website
// 'name': name,
// 'date': date,
// 'start_time': start_time,
// 'prep_duration': prep_duration,
// 'duration': duration

var fixed_tasks = {}

app.post('/api/fixed', function (req, res) {
    var task_name;
    var day;
    var start_time;
    var prep_time;
    var task_duration;
    console.log(req.body)
    Object.keys(req.body).forEach(function(key) {
        if(key == 'name'){
            task_name = req.body[key];
        }
        else if(key == 'day'){ 
            day = req.body[key];
        }
        else if(key == 'start_time'){
            start_time = req.body[key];
        }
        else if(key == 'prep_duration'){
            prep_time = req.body[key];
        }
        else if(key == 'duration'){
            task_duration = req.body[key];
        }
    });

    // {task1:{startime:900, endtime}, task2:{more stuff}, task3:{}}
    // var new_task = Master.preprocess(task_name ,start_time, prep_time, task_duration, day)
    var task = {'start_time': start_time, 'day': day, 'duration': task_duration, 'start_time': start_time, 'prep_time':prep_time}
    var true_check = master.conflictCheck(task, fixed_tasks)
    if(true_check == null){
        fixed_tasks[task_name] = {'start_time':start_time, 'day':day, 'prep_time':prep_time} 
        
         var end_time = mas.Master.addTime(start_time, task_duration);
         if(end_time > 2400){
           
           var duration = mas.Master.findTimeLength(start_time, "23:59"); //might need to swap orders
           fixed_tasks[task_name]['end_time'] = 2359;
           fixed_tasks[task_name]['duration'] = duration;
           //look at var duration, shouldnt be using -, needs master.subtractTime
           //var duration = end_time - 2400;
           ///TASK 2

           task_name = task_name + '_next_day';
           duration = mas.Master.subtractTime(duration, task_duration); 
           console.log(duration)
           fixed_tasks[task_name] = {'start_time':"00:00", 'day':day++, 'prep_time':prep_time};
           end_time = mas.Master.addTime("00:00", duration);//gonn
           fixed_tasks[task_name]['end_time'] = end_time;
           fixed_tasks[task_name]['duration'] = duration; //oh lol
        }
        else {
            fixed_tasks[task_name]['end_time'] = end_time
            fixed_tasks[task_name]['duration'] = task_duration 
        }
         
        //fixed_tasks['end_time'] = end_time //original code, uncomment if my stuffs broken
        }
    else {
        // res.end("Inserting this task would result in another one being overwritten, would you like to continue?");
        //If continue
        // OVERWRITING
        delete fixed_tasks.true_check;
        fixed_tasks[task_name] = {'start_time':start_time, 'day':day, 'prep_time':prep_time};
        
        fixed_tasks[task_name] = {'start_time':start_time, 'day':day, 'prep_time':prep_time} 
        
         var end_time = mas.Master.addTime(start_time, duration);
         if(end_time > 2400){
           
           fixed_tasks[task_name]['end_time'] = 2359;
           fixed_tasks[task_name]['duration'] = 2400 - mas.Master.parseTime(start_time);
           //new task
           var duration = end_time - 2400;
           task_name = task_name + 'I'
           fixed_tasks[task_name] = task_name;
           fixed_tasks[task_name]['day'] = day++;
           fixed_tasks[task_name]['start_time'] = start_time;
           fixed_tasks[task_name]['duration'] = task_duration; 
           end_time = mas.Master.addTime(0000, duration);
           fixed_tasks[task_name]['end_time'] = end_time;
        }
        else {
            fixed_tasks[task_name]['end_time'] = end_time
            fixed_tasks[task_name]['duration'] = task_duration 
        }


        //If discard
        return
    }
    
    // var response = master.registerFixedTask(req.body)
    // res.end(response)
    console.log(fixed_tasks)
    res.send(fixed_tasks)
})

app.get('/api/getCalendar', (req, res) => {
    res.json(fixed_tasks)
})

// Priority dictionary structure from website
// 'name': name,
// 'duration': duration,
// 'priority': priority

var priority_tasks = {}
app.post('/api/priority', function (req, res) {
    console.log(req.body)
    var priority;
    var task_name;
    var task_duration;
    Object.keys(req.body).forEach(function(key) {
        if(key == 'name'){
            task_name = req.body[key];
        }
        else if(key == 'duration'){
            task_duration = req.body[key];
        }
        else if(key == 'priority'){
            priority = req.body[key];
        }
    });
    master.timetable_assignment(priority, task_duration, fixed_tasks, priority_tasks)
    res.end("yeah priority")
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
