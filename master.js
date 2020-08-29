class Master{
    // preprocess(task_name ,start_time, prep_time, task_duration, day){
    //     var start_time = new Date(start_time)
    //     var duration_int = task_duration.parseInt()
    //     var end_time = start_time.setHours(start_time.getHours() + duration_int)
        
    //     // new Date(start_time+task_duration)
        
    // }

    /*
    * Convert HH:MM string to int 0000 to 2359
    */
    parseTime(time){
        time = time.split(":");
        var hours = parseInt(time[0]);
        hours = hours*100;

        var minutes = parseInt(time[1]);

        time = hours+minutes;
        return time;
    }

    /*
    * gets a start and a duration string in the form HH:MM
    */ 
    addTime(start_time, duration){
        var start_parsed = parseTime(start_time);
        var dur_parsed = parseTime(duration);
        var dur_mins = dur_parsed % 100;
        var dur_hours = dur_parsed - dur_mins;
        dur_hours = dur_hours/100;
        dur_mins = dur_mins + (dur_hours*60);

        var start_min = start_parsed%100; //ONLY MINUTES
        var new_hours = 0;
        var added = start_min + dur_mins;

        while(Math.floor(added/60) > 0){
            new_hours += Math.floor(added/60);
            added = added%60;
        }
        
        new_hours = new_hours * 100;
        // subtract start minutes because otherwise they get added twice
        var end_time = start_parsed + new_hours + added - start_min;
        return end_time;
    }


    conflictCheck(task, dictionary){
        var start_time = parseTime(task.start_time);
        var end_time = addTime(task.start_time, task.duration);     

        Object.keys(dictionary).forEach(function(key){
            // var dictionary[key]['start_time']
            var start_temp;
            if(key == 'start_time'){
                start_temp = dictionary[key];
            }
            else if(key == 'duration'){
                var duration_temp = dictionary[key];
            }
            start_temp = parseTime(start_temp);
            var end_temp = addTime(start_temp, duration);

            if((start_temp >= start_time && start_temp<= end_time) ||
            (start_time >= start_temp && start_time<= end_temp)){
                return true;
            }
        }
        return false;
    }

    time_available(fixed_tasks, priority_tasks){
        var time_per_day = {};
        Object.keys(fixed_tasks).forEach(function(key){
            if (fixed_tasks[key]['day'] == '1'){
                time_per_day['1'] += parseInt(fixed_tasks[key]['duration']);
            }
            else if (fixed_tasks[key]['day']=='2'){
                time_per_day['2'] += parseInt(fixed_tasks[key]['duration']);
            }
            else if (fixed_tasks[key]['day']=='3'){
                time_per_day['3'] += parseInt(fixed_tasks[key]['duration']);
            }
            else if (fixed_tasks[key]['day']=='4'){
                time_per_day['4'] += parseInt(fixed_tasks[key]['duration']);
            }
            else if (fixed_tasks[key]['day']=='5'){
                time_per_day['5'] += parseInt(fixed_tasks[key]['duration']);
            }
            else if (fixed_tasks[key]['day']=='6'){
                time_per_day['6'] += parseInt(fixed_tasks[key]['duration']);
            }
            else if (fixed_tasks[key]['day']=='7'){
                time_per_day['7'] += parseInt(fixed_tasks[key]['duration']);
            }
        if(isEmpty(priority_tasks)){
            Object.keys(priority_tasks).forEach(function(key){
                if (priority_tasks[key]['day'] == '1'){
                    time_per_day['1'] += parseInt(priority_tasks[key]['duration']);
                }
                else if (priority_tasks[key]['day']=='2'){
                    time_per_day['2'] += parseInt(priority_tasks[key]['duration']);
                }
                else if (priority_tasks[key]['day']=='3'){
                    time_per_day['3'] += parseInt(priority_tasks[key]['duration']);
                }
                else if (priority_tasks[key]['day']=='4'){
                    time_per_day['4'] += parseInt(priority_tasks[key]['duration']);
                }
                else if (priority_tasks[key]['day']=='5'){
                    time_per_day['5'] += parseInt(priority_tasks[key]['duration']);
                }
                else if (priority_tasks[key]['day']=='6'){
                    time_per_day['6'] += parseInt(priority_tasks[key]['duration']);
                }
                else if (priority_tasks[key]['day']=='7'){
                    time_per_day['7'] += parseInt(priority_tasks[key]['duration']);
                }
        }
        return time_per_day;
    }

    timetable_assignment(priority, task_duration, fixed_tasks, priority_tasks){
        
        var time_left = time_available(fixed_tasks, priority_tasks)
        if(priority == '1'){
            var priority_1_time = time_left['1'] + time_left['2'] + time_left['3'];
            var available_slots = 
        }
    }


}

var master 
console.log(addTime("12:59", "00:30"));


console.log(addTime('12:59', "00:30"));