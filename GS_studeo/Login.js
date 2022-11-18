function Validate() {
    let num = document.getElementById("phone").value;
    if (num === "") {
        console.log("please fill");
        document.getElementById("phoneMassage").innerHTML = "Phone number should be filed"
    }
    else if (num.length < 10) {
        console.log('lesser');
        document.getElementById("phoneMassage").innerHTML = "Please enter valid phone number "
    }
    else if (num.length > 10) {
        document.getElementById("phoneMassage").innerHTML = "Please enter valid phone number "
    }
    



    let name = document.getElementById("firstName").value;
    if (name === "") {
        document.getElementById("firstMassage").innerHTML = "Please enter your First name."
    } 

    

    let password=document.getElementById("firstp").value;
    let conformp=document.getElementById("secendp").value;
       if (password !== conformp){ document.getElementById("passwMassage").innerHTML="password is not match"
}
return false;
                      
}                   
