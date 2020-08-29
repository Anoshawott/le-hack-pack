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
    }

    /*
    * gets a start and a duration string in the form HH:MM
    */ 
    addTime(start_time, duration){
        var start_parsed = parseTime(start_time);
        var dur_parsed = parseTime(duration);

        var start_min = start_parsed%100; //ONLY MINUTES
        
        var added = start_min + dur_parsed;
        var new_hours = Math.floor(added/60);
        
        new_hours = new_hours * 100;
        added = added%60;
        var end_time = start_parsed + new_hours + added;
    }

}
