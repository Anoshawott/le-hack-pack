var startDate1 = new Date("12:30PM");
var startDate2 = new Date("12:50AM");
var startDate3 = new Date("15:40PM");
alert(startDate1.getTime() > startDate2.getTime()); // false
alert(startDate2.getTime() == startDate3.getTime()); //false