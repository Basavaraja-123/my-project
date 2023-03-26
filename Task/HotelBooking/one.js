
const form1 =document.querySelector(".form");

// var form = document.getElementById('form');

form1.addEventListener("submit", event =>{
    // auto submision of the form

    event.preventDefault();

    const formData = new FormData(form1);
    const data=object.formEntries(formData);
    console.log(data)

    // var name = document.getElement(name).value
    // var name = document.getElement(email).value
    // var name = document.getElement(phone).value
    // var name = document.getElement(address).value
    // var name = document.getElement(fromDate).value
    // var name = document.getElement(toDate).value
    

//  fetch post request
  fetch("./one.json",{
    method : "POST",
    // body : JSON.stringify({
    //     title:name,
    //     body:email,
    //     body:phone,
    //     body:address,
    //     body:fromDate,
    //     body:toDate
 
    // }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body:JSON.stringify(data)
  });
//   .then(function(response) {
//   return response.json()
//   })
//   .then (function(data){
//     console.log(data)
//     var premiumResult=document.getElement("premiumResult")
//     premiumResult.innerHTML = `<p> ${data.title}</p>
//     <p> ${data.body}</p>`
//   })

})