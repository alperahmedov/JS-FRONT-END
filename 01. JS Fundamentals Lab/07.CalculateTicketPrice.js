function calculateTicketPrice(dayType, age) {
    var prices = {
        weekday: {
            child: 12,
            adult: 18,
            elder: 12
        },
        weekend: {
            child: 15,
            adult: 20,
            elder: 15
        },
        holiday: {
            child: 5,
            adult: 12,
            elder: 10
        },
    }
    
    var personType = '';
    
    if(age >= 0 && age <= 18){
        personType = 'child';
    }
    if(age >= 19 && age <= 64){
        personType = 'adult';
    }
    if(age >= 65 && age <= 122){
        personType = 'elder';
    }
    
    if(personType == '') {
        console.log('Error!');
        return;
    }
    var dayTypeLower = dayType.toLowerCase();
    console.log(prices[dayTypeLower][personType] + '$')
}
 
calculateTicketPrice('Weekday', 12);