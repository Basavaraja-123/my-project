const num1 = math. ceil (Math.random()*10);
const num2 = math. ceil (Math.random()*10);

const  questionE1 = document.getElementById("question");
const inputE1=document.getElementById("input");
const formE1= document.getElementById("Form");
const scoreE1 = document.getElementById ("score");  
let score = JSON.parse (localStorage.getItem ("score")); 

if (!score) {
    score = 0;
}
scoreE1.innerText= 'score: ${score}';
questionE1.innerText= 'What is the ${num1} multiply by ${num2}?';

const correctAns= numb1 * numb2;
formE1.addEventListener("Submit", ()=>{ 
    const userAns = +inputE1.value;
    if(userAns === correctAns){ 
        score++ ;
        updateLocalStorag( );
    }
    else{ score --;
        updateLocalStorag( );
    }
 });
 function updateLocalStorag(){
    localStorage.setItem("score" , JSON. stringify(score));
 }