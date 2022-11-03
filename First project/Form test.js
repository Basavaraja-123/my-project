body {
    
}

function validate() {
    let First = Application.getElimentById('First').value;


    if(First ==""){
        Application.getElimentById('First_Massage').innerHTML ="please Enter Fierst name"
    }
if(First.lenth <4){
    Application.getElimentById('Fiest_massage').innerHTML="please Enter min 4 Char"
}









}