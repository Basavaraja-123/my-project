//write a function called sleep in that takes 2 boolian parameters: WEEKDAYS and VACATION
//That parameters weekday is true if it is a weekdays. and
//the parameters vacation is true  if we are on vacation.
//we sllep in if it is not a weekday or we are on vacation  return true 
//if we sleep in 

     //   (weekdays vacation)
// sleep-in ( false,   false) = true
// sleep-in ( true,    false)= false
// sleep-in ( false,   true)= true
// sleep-in ( true,    true)= true

function sleep_in (weekday,vacation){
    if (weekday==false) { return true}
    else if (vacation == true) { return true}
return false}
    console.log (' Is employee sleeping '+ sleep_in( true, true));
    console.log (' Is employee sleeping '+ sleep_in( true, false));
    console.log (' Is employee sleeping '+ sleep_in( false, true));
    console.log (' Is employee sleeping '+ sleep_in( false, false));


