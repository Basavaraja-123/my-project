// class Employee{
// min_bal=500;
// constructor(emp_Id,emp_Name, emp_Email){
//     console.log( "constructor will excute automitically")
//     this.emp_Id=emp_Id;
//     this.emp_Name=emp_Name;
//     this.emp_Email= emp_Email;
// }
// getEmployeeDtails(){ console.log(`Employee Id ${this.emp_Id} Employee Name ${this.emp_Name} Employee Email ${this.emp_Email}`)}
// }
// let e1=new Employee(1001,"abhi" , "abhi@gmail.com")
// let e2=new Employee( 1002, "adhi","adhi@gmail.com")
// // console.log (e1);
// // console.log (e2);
// e1.getEmployeeDtails()



// var name=prompt("This is marrage rigistration.   Enter your name:")
// var age=prompt(" Enter your age:")

// if ( age<18){ alert(" Hey... Bad boy please wait untill cross 18 years. don't be hurry")
// }
// else if ( age>60){
//     alert (" Hello "+name+" sorry..! You are age is Expired, not elgible for marrage . please go and dai ")
// }
// else { alert (" Hello "+name+" Thanks for rigistration you will get best match soon" )}


// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "run";
// const myAdverb = "quickly";

// const sentence = "My "+myNoun+" is "+myAdjective+ " and it "+myVerb+" very fast."
// console.log(sentence)




// const myArray = [["John", 23], ["cat", 2] ["ramy",43[20,4,5,6]] ];
// myArray.push(["dog",3])
// console.log (myArray)


// const threeArr = [1, 4, 6];

// const oneDown = threeArr.pop();
// // console.log(oneDown);
// console.log(threeArr);


// const myArray = [["John", 23], ["cat", 2]];
// myArray.pop([])



// function reusableFunction(){
//   console.log ("Hi World") 
 
// }
// reusableFunction();


// Return a Value from a Function with Return
// function timesFive(n ){
//   return n*5
// }
// console.log(timesFive(6))


// function test (myCondition) {
//     if (myCondition) {
//       return "It was true";}
//     return "It was false";
//   }
//   console.log (test(true));
//   console.log(test(false));

// function wish(name){
//     console.log("hello " + name + " good morning")

// }
// wish("ravi")


// factorial of a number
// function factorial(num){
//     result=1
//     for( var i=2; i<=num;  i++)
//  result= result*i
// return result}
// console.log(" the Factorial of 4 is :"+factorial(10))

// function replace(str){
//     var newStr =str.replaceAll('prasana' , 'vidy')
//  return newStr
// }
// console.log (replace('prasana1 prasana2') )



// function anysong( ){
//     console.log ("1990s  songs")
//     console.log( "2000s songs")
// }
// setInterval(anysong,3000)


// strings time Repetation operater (use for loop or while loop)
// function stringTime(str,n ){
//     result=" "
//     count=1
// while (count <=n){
//     result= result + str 
//     count++}
//     return result}
// console.log(stringTime('hello, ', 10))
// console.log(stringTime('hi, ',3))
// console.log(stringTime('Good morning, ', 10))



//Ternary Operator: Is 3 condition is called as ternary oparater, 3 argument given any oprator such type of called ternary operator.

// function  luckySume(a,b,c){
//     if (a==13){ return 0;}
//     else if ( b==13) { return a;}
//     else if (c==13 ){ return a+b;}
//     else { return a+b+c;}
// }
// console.log( luckySume (20,50,13))
// console.log( luckySume (20,13,34))
// console.log( luckySume (13,50,17))
// console.log( luckySume (20,50,44))


// Comparison with the Strict Inequality Operator
// function testStrictNotEqual(val) {
//     if (val!==17) { 
//       return " Not Equal";
//     }
//     return " Equal";
//   }
  
//  console.log (testStrictNotEqual(17));

// function smailes(pSmail,vSmail ){
//     if (( pSmail==true && vSmail==true) || (pSmail==false && vSmail==false)){ return true}
// else { return false}
// }
// console.log ("Smail trubal:"+ smailes(true,true));
// console.log ("Smail trubal:"+ smailes(false,true));
// console.log ("Smail trubal:"+ smailes(false,false));
// console.log ("Smail trubal:"+ smailes(true,false));



//inheritance concept
// class p{ mony=100     // parant class
// amount=200}


// class c extends p{ mony=500  //it will over write from parant class   //child class
// }
// let e= new c ()
// console.log(e)
// console.log(e.mony)

// let a=new p()
// console.log(a.mony)
// console.log(a)


let hero_name = "sudeep"
module.exports = hero_name