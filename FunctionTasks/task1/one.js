// 100 year life
// 21 year is compleated
// return need  reamaining year 
//                         week
//                         month
//                         days

var ashok=agelife(20,100) 
function agelife(age,life){


    var remaining_year =(life-age);
    var remaining_month=(remaining_year*12);
    var remaining_days=(remaining_year*365);
    var remaining_week=(remaining_days / 7);

}
console.log(' Ashok... You will alive '+remaining_year+' years');
console.log( ' Ashok... you will alive '+remaining_month+' months ');
console.log(' Ashok.... you will alive '+remaining_week+' weeks');
console.log(' Ashok.... you will alive ' +remaining_days+' days');

// var result=('You will alive:'+remaining_year+'years You will alive'+remaining_month+'month you will alive'+remaining_week+'weeks  you will alive'+remaining_days+'Days')

// console.log(result);



