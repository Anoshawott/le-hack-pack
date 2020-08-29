// import Master from 'master'
// var master = new Master()

const express = require('express')
const bodyParser = require('body-parser')
const  path = require('path')

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
    Object.keys(req.body).forEach(function(key) {
        if(key == 'name'){
            var task_name = req.body[key];
        }
        else if(key == 'day'){ 
            var day = req.body[key];
        }
        else if(key == 'start_time'){
            var start_time = req.body[key];
        }
        else if(key == 'prep_duration'){
            var prep_time = req.body[key];
        }
        else if(key == 'duration'){
            var task_duration = req.body[key]
        }
    });
    // var new_task = Master.preprocess(task_name ,start_time, prep_time, task_duration, day)
    var true_check = conflictCheck()
    if(true_check[0] == False){
        fixed_tasks['task_name'] = task_name
        fixed_tasks['day'] = day
        fixed_tasks['start_time'] = start_time
        /*
        * end_time = addTime(start_time, duration);
        * if(end_time > 2400){
        *   fixed_tasks['end_time'] = 2359
        *   duration = end_time - 2400
        *   make new task
        * }
        */ 
        fixed_tasks['end_time'] = end_time
    else{
        res.end("")
    }
    }
    // var response = master.registerFixedTask(req.body)
    // res.end(response)

    res.end("yeah fixed")
})

// Priority dictionary structure from website
// 'name': name,
// 'duration': duration,
// 'priority': priority

var priority_tasks = {}
app.post('/api/priority', function (req, res) {
    Object.keys(req.body).forEach(function(key) {
        if(key == 'name'){
            var task_name = req.body[key];
        }
        else if(key == 'duration'){
            var task_duration = req.body[key]
        }
        else if(key == 'priority'){
            var prep_time = req.body[key];
        }
    });

    res.end("yeah priority")
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
