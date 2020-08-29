var startDate1 = new Date("12:30");
var startDate2 = new Date("12:50");
var startDate3 = new Date("15:40");
alert(startDate1.getTime() > startDate2.getTime()); // false
alert(startDate2.getTime() == startDate3.getTime()); //false