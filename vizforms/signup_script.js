/*
function validation(){
	
	var error=0;

	//username
	var name=document.signup.username;
	if (name.value===""){
		document.getElementById("erruser").style.display="block";
		error=1;
	}else{
		document.getElementById("erruser").style.display="none";
		error=0;
	}

	if(name.lenght<6){
		alter("Name must be atleast 6 characters long");
	}

	//email
	var mail=document.signup.email;
	if(mail.value===""){
		document.getElementById("errmail").style.display="block";
		error=1;
	}else{
		document.getElementById("errmail").style.display="none";
		error=0;
	}

	//mobile
	var tel=document.signup.mob;
	if(tel.value===""){
		document.getElementById("errmob").style.display="block";
		error=1;
	}else{
		document.getElementById("errmob").style.display="none";
		error=0;
	}

	//password
	var pass=document.signup.pwd;
	if(pass.value===""){
		document.getElementById("errpwd").style.display="block";
		error=1;
	}else{
		document.getElementById("errpwd").style.display="none";
		error=0;
	}

	//confirm password
	var con=document.signup.conpwd;
	if(con.value===""){
		document.getElementById("errconpwd").style.display="block";
		error=1;
	}else{
		document.getElementById("errconpwd").style.display="none";
		error=0;
	}

	if (error==0){
		return true;
	}else{
		return false;
	}

	

	if(tel.lenght>6){
		alter("Mobile number should not exceed 10 characters");
	}

	if(pass.lenght<6){
		alter("Password must be atleast 6 characters long");
	}

	if(pass!==con){
		alter("Passwords did not match");
	}
}
*/

function validation(){
	if(document.getElementById("pwd").value!==document.getElementById("conpwd").value){
		alert("Passwords did not match");
		return false;
	}else{
		window.location.href="signup_success.html";
		return false;
	}
}