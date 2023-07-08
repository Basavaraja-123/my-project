// 100 year life
// 21 year is compleated
// return need  reamaining year 
//                         week
//                         month
//                         days


function agelife(age,life=100){
    var remaining_year =(age-life);
    var remaining_month=(remaining_year*12);
    var remaining_days=(remaining_year*365);
    var remaining_week=(remaining_days / 7);

console.log('Ashok... You will alive '+ remaining_year +'years');
console.log('Ashok... you will alive '+ remaining_month +'months');
console.log('Ashok... you will alive '+ remaining_week +' weeks');
console.log('Ashok... you will alive '+ remaining_days +'days');
}
agelife(80);

// var result=('You will alive:'+remaining_year+'years You will alive'+remaining_month+'month you will alive'+remaining_week+'weeks  you will alive'+remaining_days+'Days')

// console.log(result);



