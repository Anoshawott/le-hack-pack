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

    /*
    * Checks a new fixed task vs the dictionary to ensure we have no
    * clashes
    * task = fixeed_task
    * dictionary = dictionary of fixed_tasks
    */ 
    conflictCheck(task, dictionary){
        var start_time = parseTime(task.start_time);
        var end_time = addTime(task.start_time, task.duration);     

        Object.keys(dictionary).forEach(function(key){
            // var dictionary[key]['start_time']
            var start_temp = dictionary[key]['start_time'];
            var duration_temp = dictionary[key]['duration'];
            
            start_temp = parseTime(start_temp);
            var end_temp = addTime(start_temp, duration);

            if((start_temp >= start_time && start_temp<= end_time) ||
            (start_time >= start_temp && start_time<= end_temp))
                return key;
        });
        return null;
    }

    time_available(fixed_tasks, priority_tasks){
        var time_per_day = {};
        var cur_task_allocation = {'1':{},'2':{},'3':{},'4':{},'5':{},'6':{},'7':{}};
        Object.keys(fixed_tasks).forEach(function(key){
            if (fixed_tasks[key]['day'] == '1'){
                time_per_day['1'] += parseInt(fixed_tasks[key]['duration']);
                cur_task_allocation['1'][key] = {'start_time':fixed_tasks[key]['start_time'], 'end_time':fixed_tasks[key]['end_time'], 'prep_time':fixed_tasks[key]['prep_time']};
            }
            else if (fixed_tasks[key]['day']=='2'){
                time_per_day['2'] += parseInt(fixed_tasks[key]['duration']);
                cur_task_allocation['2'][key] = {'start_time':fixed_tasks[key]['start_time'], 'end_time':fixed_tasks[key]['end_time'], 'prep_time':fixed_tasks[key]['prep_time']};
            }
            else if (fixed_tasks[key]['day']=='3'){
                time_per_day['3'] += parseInt(fixed_tasks[key]['duration']);
                cur_task_allocation['3'][key] = {'start_time':fixed_tasks[key]['start_time'], 'end_time':fixed_tasks[key]['end_time'], 'prep_time':fixed_tasks[key]['prep_time']};
            }
            else if (fixed_tasks[key]['day']=='4'){
                time_per_day['4'] += parseInt(fixed_tasks[key]['duration']);
                cur_task_allocation['4'][key] = {'start_time':fixed_tasks[key]['start_time'], 'end_time':fixed_tasks[key]['end_time'], 'prep_time':fixed_tasks[key]['prep_time']};
            }
            else if (fixed_tasks[key]['day']=='5'){
                time_per_day['5'] += parseInt(fixed_tasks[key]['duration']);
                cur_task_allocation['5'][key] = {'start_time':fixed_tasks[key]['start_time'], 'end_time':fixed_tasks[key]['end_time'], 'prep_time':fixed_tasks[key]['prep_time']};
            }
            else if (fixed_tasks[key]['day']=='6'){
                time_per_day['6'] += parseInt(fixed_tasks[key]['duration']);
                cur_task_allocation['6'][key] = {'start_time':fixed_tasks[key]['start_time'], 'end_time':fixed_tasks[key]['end_time'], 'prep_time':fixed_tasks[key]['prep_time']};
            }
            else if (fixed_tasks[key]['day']=='7'){
                time_per_day['7'] += parseInt(fixed_tasks[key]['duration']);
                cur_task_allocation['7'][key] = {'start_time':fixed_tasks[key]['start_time'], 'end_time':fixed_tasks[key]['end_time'], 'prep_time':fixed_tasks[key]['prep_time']};
            }
        });

        // can we change following into a for loop?
        if(isEmpty(priority_tasks)==false){
            Object.keys(priority_tasks).forEach(function(key){
                if (priority_tasks[key]['day'] == '1'){
                    time_per_day['1'] += parseInt(priority_tasks[key]['duration']);
                    cur_task_allocation['1'][key] = {'start_time':priority_tasks[key]['start_time'], 'end_time':priority_tasks[key]['end_time']};
                }
                else if (priority_tasks[key]['day']=='2'){
                    time_per_day['2'] += parseInt(priority_tasks[key]['duration']);
                    cur_task_allocation['2'][key] = {'start_time':priority_tasks[key]['start_time'], 'end_time':priority_tasks[key]['end_time']};
                }
                else if (priority_tasks[key]['day']=='3'){
                    time_per_day['3'] += parseInt(priority_tasks[key]['duration']);
                    cur_task_allocation['3'][key] = {'start_time':priority_tasks[key]['start_time'], 'end_time':priority_tasks[key]['end_time']};
                }
                else if (priority_tasks[key]['day']=='4'){
                    time_per_day['4'] += parseInt(priority_tasks[key]['duration']);
                    cur_task_allocation['4'][key] = {'start_time':priority_tasks[key]['start_time'], 'end_time':priority_tasks[key]['end_time']};
                }
                else if (priority_tasks[key]['day']=='5'){
                    time_per_day['5'] += parseInt(priority_tasks[key]['duration']);
                    cur_task_allocation['5'][key] = {'start_time':priority_tasks[key]['start_time'], 'end_time':priority_tasks[key]['end_time']};
                }
                else if (priority_tasks[key]['day']=='6'){
                    time_per_day['6'] += parseInt(priority_tasks[key]['duration']);
                    cur_task_allocation['6'][key] = {'start_time':priority_tasks[key]['start_time'], 'end_time':priority_tasks[key]['end_time']};
                }
                else if (priority_tasks[key]['day']=='7'){
                    time_per_day['7'] += parseInt(priority_tasks[key]['duration']);
                    cur_task_allocation['7'][key] = {'start_time':priority_tasks[key]['start_time'], 'end_time':priority_tasks[key]['end_time']};
                }
        }); //cur_task_allocation = {1:{task1:{start, end}, task2:{start, end}}, 2:{task1:{start, end}}}
        var sorted_allocation = {'1':{},'2':{},'3':{},'4':{},'5':{},'6':{},'7':{}}
        Object.keys(cur_task_allocation).forEach(function(key1){
            var min_val = 9999;
            var min_key = "";
            while(isEmpty(cur_task_allocation[key1]) == false){
                Object.keys(key1).forEach(function(key2){
                    var value = parseTime(cur_task_allocation[key1][key2]['start_time']);
                    var key_of_value = cur_task_allocation[key1][key2]
                    if(value < min_val){
                        min_val = value;
                        min_key = key_of_value;
                    }
                });
                sorted_allocation[key1][key_of_value] = cur_task_allocation[key1][key2]
                delete cur_task_allocation[key1][key2]
            }
        });
        return Array(time_per_day, sorted_allocation);
    }

    timetable_assignment(priority, task_duration, fixed_tasks, priority_tasks){
        
        var time_left = time_available(fixed_tasks, priority_tasks)
        if(priority == '1'){
            var priority_1_time = time_left['1'] + time_left['2'] + time_left['3'];
            if(priority_1_time > task_duration){
                
            }  
            else{
                //second app.post for conflict resolution...will need pratham to help me
            }
        }
    }


}

var master 
console.log(addTime("12:59", "00:30"));


console.log(addTime('12:59', "00:30"));