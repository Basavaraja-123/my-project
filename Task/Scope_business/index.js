function validationForm(e) {
  var f_name = document.getElementById("f_name");
  var compny = document.getElementById("Company");
  var user_email = document.getElementById("email");
  var gndr = document.getElementById("gender");
  var Ph_num = document.getElementById("Ph_numb");
  var loca = document.getElementById("location");
  var ty_business = document.getElementById("ty_business");  
  var form = document.getElementById("form");

  let messages = [];
  if (f_name.value == "") {
    messages.push("Name is required");
    alert("hello")
  }
//   } else if (user_email == null || user_email == "") {
//     alert("Email cannot be blank");
//     return false;
//   } else if (compny == null || compny == "") {
//     alert("Company cannot be blank");
//     return false;
//   } else if (loca == null || loca == "") {
//     alert("Location cannot be blank, please enter a location");
//     return false;
//   } else if (Ph_num == null || Ph_num == "") {
//     if (Ph_num <= 10) {
//       alert("Please enter a valid number");
//       return false;
//     } else if (Ph_num >= 10) {
//       alert("Please enter a valid number");
//       return false;
//     } else {
//       return true;
//     }
//   } else if (gndr[0].checked == false && gndr[1].checked == false) {
//     alert("Please select a gender");
//     return false;
//   } else if (ty_business.selectedIndex == 0) {
    // alert("Please select a Type of Business");
//     return false;
//   }

  e.preventDefault();
}

