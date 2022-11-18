// function validateForm ( ){
// let name=document.getElementById ("UserName").value


// if (name==""  ) { 
// document.getElementById("UserMassage").innerHTML="Please Enter the name"
// }
// return false
// }

function validateForm( ){
    let passwordo= document.getElementById("userPassword").value

    if (passwordo ==""){
        document.getElementById("PasswMassage").innerHTML="Please Enter the Password"
    }
//    else
//      if(passwordo){
//         document.getElementById("PasswMassage").inerHtml="Please Enter One Special Charater"
    
//     }
    return false
}