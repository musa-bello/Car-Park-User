const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
var overlay = document.getElementById("overlay-container");
var link1 = document.getElementById("sign-up-link");
var link2 = document.getElementById("sign-in-link");
var signInContainer=  document.getElementById("sign-in-container1");
var signUpContainer=  document.getElementById("sign-up-container1");

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
  signUpContainer.style.opacity="1";
  signUpContainer.style.width="100%";

});
link2.addEventListener("click", function(){
signUpContainer.style.display="none";
signInContainer.style.display="block";
signInContainer.style.opacity="1";
signInContainer.style.width="100%";

});


function checkForm(form){
  if(form.name.value == ""){
    alert("Error: Username cannot be blank!");
    form.name.focus();
    return false;
  }
  re = /^\w+$/;
  if(!re.test(form.username.value)){
    alert("Error: Username must contain only letters!");
    form.username.focus();
    return false;
  }
  re = /[0-9]/;
    if(!re.test(form.username.value)){
      alert("Error: Your biological name cannot contain numbbers!");
      form.reg-pword.focus();
      return false;
    }
  if(form.reg-pword.value != ""){
    if(form.reg-pword.value.lenght < 6){
      alert("Error: Password must contain at least six characters!");
      form.reg-pword.focus();
      return false;
    }
    if(form.reg-pword.value == form.username.value){
      alert("Error: Password must be different from username!");
      form.reg-pword.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form.reg-pword.value)){
      alert("Error: Password must contain atleast one number (0-9)!");
      form.reg-pword.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form.reg-pword.value)){
      alert("Error: Password must contain atleast one lowercase letter (a-z)!");
      form.reg-pword.focus();
      return false;
    }
    re = /[A-Z]/;
    if(!re.test(form.reg-pword.value)){
      alert("Error: Password must contain atleast one uppercase letter (A-Z)!");
      form.reg-pword.focus();
      return false;
    }
  }
  alert("Registration Successful!")
}