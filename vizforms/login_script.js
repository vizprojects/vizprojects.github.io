function validation(){
	if((document.getElementById("username").minlength=5) && (document.getElementById("pwd").minlength=6)){
		window.location.href="login_success.html";
		return false;
	}
}