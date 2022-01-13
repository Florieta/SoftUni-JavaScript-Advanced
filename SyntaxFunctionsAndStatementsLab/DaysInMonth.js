function daysInMonth(month, year){
    let myDate = new Date(year, month, 0);
    console.log(myDate.getDate());
}

daysInMonth(1, 2012);
daysInMonth(2, 2011);