// let name = require('./one.js')   //alias import 
// console.log(name)


// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line
// for(let i=0; i<myArr.length;i++){
//   console.log(myArr[i])} 

var count = 0;
function cc(card) {

while (card == 2) {
  count++;
  break;
}
  while (card == 3) {
  count++;
  break;
}
  while (card == 4) {
  count++;
  break;
}
  while (card == 5) {
  count++;
  break;
}
  while (card == 6) {
  count++;
  break;
}
  while (card == 7) {
  count = count;
  break;
}
  while (card == 8) {
  count = count;
  break;
}
  while (card == 9) {
  count = count;
  break;
}
  while (card == 10) {
  count--;
  break;
}
  while (card == "J") {
  count--;
  break;
}
  while (card == "Q") {
  count--;
  break;
}
  while (card == "K") {
  count--;
  break;
}
    while (card == "A") {
  count--;
  break;
}
  
  if (count >= 1) {
    return count + " Bet";
  } else
  return count + " Hold";

}