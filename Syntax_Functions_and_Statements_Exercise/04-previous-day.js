function previousDay(year, month, day) {
    const currentDay = `${year}-${month}-${day}`;
    let result = new Date(currentDay);
    result.setDate(day-1);
    
    console.log(`${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`)
}

previousDay(2016, 9, 30)
