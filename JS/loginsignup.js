
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
var overlay = document.getElementById("overlay-container");
var link1 = document.getElementById("sign-up-link");
var link2 = document.getElementById("sign-in-link");
var signInContainer=  document.getElementById("sign-in-container1");
var signUpContainer=  document.getElementById("sign-up-container1");
var arrow = document.getElementById("arrow");
var phoneForm = document.getElementById("phoneNumber");
var otpForm = document.getElementById("otp");
var regForm = document.getElementById("regForm");



//=================================================SIGN UP FORM===============================================================
$(document).ready( function () {
  $('.form').submit( function () {
    var formdata = $(this).serialize();
    $.ajax({
        type: "POST",
        data: formdata
           });
           return false;
          });

    $('#first').autotab({target: '#second', format: 'numeric'});
    $('#second').autotab({target: '#third', format: 'numeric', previous: '#first'});
    $('#third').autotab({target: '#fourth', previous: '#second', format: 'numeric'});
    $('#fourth').autotab({previous: '#third', format: 'numeric'});
      });
  
arrow.addEventListener("click", function(){
  otpForm.style.display = "none";
  phoneForm.style.display = "block";
})


function moveForward(){
  otpForm.style.display = "block";
  phoneForm.style.display = "none";
}
function moveForward2(){
  otpForm.style.display = "none";
  regForm.style.display = "block";
}
//===============================================================================================================
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  signInContainer.style.display="none";
  

});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  signInContainer.style.display="block";
  
});

link1.addEventListener("click", function(){
  signInContainer.style.display="none";
  signUpContainer.style.display="block";
  signUpContainer.style.transition="all 0.6s ease-in-out";
  signUpContainer.style.opacity="1";
  signUpContainer.style.width="100%";
  
});
link2.addEventListener("click", function(){
  signUpContainer.style.display="none";
  signInContainer.style.display="block";
  signInContainer.style.transition="all 0.6s ease-in-out";
  signInContainer.style.opacity="1";
  signInContainer.style.width="100%";
});









function checkForm(){
  var firstName = document.forms["RegForm"]["firstName"];
  var lastName = document.forms["RegForm"]["lastName"];
  var email = document.forms["RegForm"]["email"];
  var pword = document.forms["RegForm"]["pword"];

  if(firstName.value== ""){
    window.alert("Please enter your name.");
    firstName.focus();
    return false;
  }
  if(lastName.value== ""){
    window.alert("Please enter your name.");
    lastName.focus();
    return false;
  }
  re= /^\w+$/;
  if(!re.test(lastName.value)){
    window.alert("Your name must contain only letters, numbers and underscore.");
    lastName.focus;
    return false;
  }
  re= /^\w+$/;
  if(!re.test(firstName.value)){
    window.alert("Your name must contain only letters, numbers and underscore.");
    firstName.focus;
    return false;
  }
  if(pword.value != ""){
    if(pword.value.length < 6){
      window.alert("Your password must not be less than six characters.");
      pword.focus();
      return false; 
    }
    if(pword.value==firstName.value || pword.value==lastName.value ){
      window.alert("Your password and name must not be the same.")
      pword.focus();
      return false;
    }
    re= /[0-9]/;
    if(!re.test(pword.value)){
      window.alert("Password should contain at least one number(0-9).")
      pword.focus();
      return false;
    }
    re= /[a-z]/;
    if(!re.test(pword.value)){
      window.alert("Password should contain at least one lowercase letter(a-z).")
      pword.focus();
      return false;
    }
    re= /[A-Z]/;
    if(!re.test(pword.value)){
      window.alert("Password should contain at least one uppercase letter(A-Z).")
      pword.focus();
      return false;
  }
  
  return true
}
}
