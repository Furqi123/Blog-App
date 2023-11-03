var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var container = document.querySelector(".container");
var userName = document.getElementById('userName')
var regEmail = document.getElementById('register-email')
var regPassword = document.getElementById('register-pass')
var  regCPass  = document.getElementById('register-cpass')


sign_up_btn.addEventListener("click", function() {
  container.classList.add("sign-up-mode");
  
});

sign_in_btn.addEventListener("click", function() {
  container.classList.remove("sign-up-mode");
});


function signUp(){
  event.preventDefault();

  if(userName.value == "".trim()){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Enter User name',
      
    })
  }  else if(regEmail.value == "".trim()){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Enter Email',
      
    })
  }
  else if(regPassword.value == "".trim()){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Enter Password',
      
    })
  }
  else if(regCPass.value !== regPassword.value){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password Should Be Some or not empty',
      
    })
  }

else{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title:  `${userName.value} Register Successfully`,
    showConfirmButton: false,
    timer: 1500
  })
  var userData = {
    userName : userName.value,
    regEmail:  regEmail.value,
    regPassword: regPassword.value,
    regCPass:  regCPass.value
   }
 
 localStorage.setItem("userData",JSON.stringify(userData))
setTimeout(function(){
   window.location.href = "./dashboard.html"
},2000)

}
  

}


// var userData = {
//   userName : userName.value,
//   regEmail:  regEmail.value,
//   regPassword: regPassword.value,
//   regCPass:  regCPass.value
//  }

// localStorage.setItem("userData",JSON.stringify(userData))
// var getUserData = localStorage.getItem('userData')
// getUserData = JSON.parse(getUserData) 
//  console.log(getUserData)


var loginEmail = document.getElementById('loginEmail');
var loginPass = document.getElementById('loginPass');

function signIn(){
  var localData = JSON.parse (localStorage.getItem("userData"));
  event.preventDefault();

  if(!localData){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'User Not Found',
      
    })
    loginEmail.value = "";
    loginPass.value = ""
  }

  if(loginEmail.value !== localData.regEmail){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Incorrect Email',
      
    })
  }

  else if(loginPass.value !== localData.regPassword){
    
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Incorrect Password',
      
    })
  }
 
else{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title:  `${localData.userName} Register Successfully`,
    showConfirmButton: false,
    timer: 1500
  })
  setTimeout(function(){
    window.location.href = "./dashboard.html"
  },2000)

}

}

