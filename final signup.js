function myFunction() {
  var fn =document.forms["myForm"]["fname"].value;
  var ln =document.forms["myForm"]["lName"].value;
  var email =document.forms["myForm"]["email"].value;
  var phone =document.forms["myForm"]["phone"].value;
  var bth =document.forms["myForm"]["dateOfBirth"].value;

  
  if (fn == "") {
    alert("Please fill out your first name.");
    return false;
  }   
  if (ln == "") {
    alert("Please fill out your last name.");
    return false;
  }  
  if (email == "") {
    alert("Please fill out your email.");
    return false;
  }  
  if (phone == "") {
    alert("Please fill out your phone number.");
    return false;
  }  
  if (bth == "") {
    alert("Please fill out your birthday.");
    return false;
  }  
}
