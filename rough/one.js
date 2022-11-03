//Fuction example


/*function wish( name){
    console.log ('hello '+name+' good morning')
}
wish('mani') */


/*function wish(name='guest') {
    console.log ( 'hello.. '+name+' good morning')
}
wish('sharath')*/

/* function wish( rahul,priya) {
    console.log (rahul);
    console.log (priya)
}
wish(10,20)  */


/*function add (rahul,priya,sonia){
    console.log (goodmorning)
    console.log(goodafternoon)
    console.log(goodnight)
}
add (10,20,30)       //  (String is importent here) ,error code check next one why  not error   */ 


/*function add (goodmorning,goodafternoon,goodnight){
    console.log (goodmorning)
    console.log(goodafternoon)
    console.log(goodnight)
}
add (10,20,30) */

/*function add (a,b){
    console.log(a+b)
    // console.log(b)
}
add (10,20)
add(20,30) 
add (100,200)
add(1000) // a value is 1000 and b is undifined = number+undifine = Nan */


/*function add (a,b,c,d=200){ // d=200 is defult value
    console.log (a+b+c+d)
}
add (10,20,30)           //D is defult value will take cos if we are not passing argument.
add (10,20,30,40)    */   // D is not take defult value cos we are passing argument.   


/*function wish (a,b,c){ 

    console.log( a+b+c)
}
wish(1,2,3,4,)  //last argument is not add  in function */


/*function emp_details(id, name, sal){
    console.log( id)
    console.log(name +'sai') //we can add aditional name or number
    console.log (sal + 5000)   //we can add aditional name or number
    //console.log(id + name + sal) 
}
emp_details( 101,'rahul',45000)
emp_details( 102,'priya',55000) */


/*function wish( ){
    return "hello , goodmorning"}
    var massage = wish ( );
    console.log (massage) */


/*function add (a,b,c,d=10){
    return a+b+c+d+100 
}
    let totl  =add( 10,20,30);
console.log ( totl)*/


/*function wish(msg){
return "Hello" + msg
}
let massage = wish("good morning")
console.log (massage) */

/*function wish (){
    return "good morning"
    console.log ("Hello good night") //after return statement we can't write anything 
}
let msg =wish()
console.log (msg)  */


/*function wish (){
    console.log ("Hello good night") //before return statement we can print
    return "good morning"  //after return statement we can't write anything 
}
let msg =wish()
console.log (msg) */


/*function wish () {
    console,log("Hello ,good morning")
    alart ( "hello, good night spleep well")
}    */

/*function outer (){
    console.log('outer function')
    function inner(){
        console.log ( 'inner function')
    }
    inner()    //we calld as reccorcive function it will print number of times 
    //outer() 
}
outer()
inner()    // it is side fuction,  no reffrence out side fuction       */



 
// Array methods example

/*let size =[10,20 ]
console.log (size.length)
size.push (38); 
size.push (55)
console.log ( size);
console.log (size.length)
size.pop()
 console.log(size)
 size.unshift(001)
 console.log (size)
size.unshift( 10,30)
console.log (size)
size.shift( 10,30)
console.log (size)*/


/*let num =[10,20,22,33]
if ( num.length==0){ console.log ( 'empty')}
else { console.log('No empty')} */


/*let num =[  ]
if ( num.length==0){ console.log ( 'empty')}
else { console.log(' No empty')}  */

//how to find  number of array index
/*let numbers = [10,20,30,40,50,60]
console.log (numbers.lastIndexOf (numbers[numbers.length -3])) */  // keep chang -3 and check the value

//how to find indax value with array value
/*let num = [10,20,30,40,50,'chali']
console.log( num.indexOf('chali')) */  // keep chang chali and check the value 

//how to find  any perticular indax of value 
/*let numr = [10,20,30,40,50,'chali']
console.log( num[numr.length -2 ]) */ // keep chang -2 and check the value


/*let multi =a => a*100
console.log( multi(3)) */ // keep chang 3 and check the value 

/*let multipl =a => a*100
console.log( multipl(12)) */    // keep chang 12 and check the value


let multipl = (a,b) => { return  a * 100 , b*50 }
console.log( multipl(10,2))
console.log ( multipl(20,6))

 