function validation(){
	var username = document.getElementById('username');
    var password = document.getElementById('pwd');
    username.addEventListener('blur', nameVerify, true);
    password.addEventListener('blur', passwordVerify, true);

    function nameVerify() {
    if (username.value != "") {
     username.style.border = "1px solid #5e6e66";
     name_error.innerHTML = "";
     return true;
    }
  }

  function passwordVerify() {
    if (password.value != "") {
      password.style.border = "1px solid #5e6e66";
      password_error.innerHTML = "";
      return true;
    }
  }

    if (username.value == "") {
      username.style.border = "1px solid red";
      document.getElementById('name_error').style.color = "red";
      name_error.textContent = "Username is required";
      username.focus();
      return false;
  	}

  	if (username.value.length < 3) {
      username.style.border = "1px solid red";
      name_error.textContent = "Username must be at least 3 characters";
      username.focus();
      return false;
    }

    if (password.value == "") {
      password.style.border = "1px solid red";
      document.getElementById('password_error').style.color = "red";
      password_error.textContent = "Password is required";
      password.focus();
      return false;
    }
    
    if (password.value.length < 6) {
      password.style.border = "1px solid red";
      document.getElementById('password_error').style.color = "red";
      password_error.textContent = "Password must be at least 6 characters";
      password.focus();
      return false;
    } else{
      window.load.href="login_success.html";
    }   

    
}