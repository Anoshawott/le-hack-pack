class Master{
    preprocess(task_name ,start_time, prep_time, task_duration, day){
        var start_time = new Date(start_time)
        var duration_int = task_duration.parseInt()
        var end_time = start_time.setHours(start_time.getHours() + duration_int)
        
        // new Date(start_time+task_duration)
        
    }

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

    console.log(addTime('12:59', "00:30"));

    conflictCheck()


}

var master 
console.log(.addTime("12:59", "00:30"));
