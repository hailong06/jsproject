const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');
const form = document.getElementById('#form');

signupBtn.onclick = function(){
    formBx.classList.add('active');
    body.classList.add('active');
}
signinBtn.onclick = function(){
    formBx.classList.remove('active');
    body.classList.remove('active');
}
var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "123456"
	}
]
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	var success = -1;
	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			document.getElementById("inforname1").style.display= 'none';
			document.getElementById("infor").style.display= 'block';
			document.getElementById("logout").style.display= 'block';
			console.log(infor);
			alert("Welcome " + username + " is logged in!!!")
			success = i;
			prname = username;
			document.getElementById("inforname").innerHTML= "Welcome " + prname;
			return
		}else if(username == '' || password == ''){
			alert("Không để trống");
		}
		
	}
	alert("Sai");
}
function registerUser(){
    var registerUser = document.getElementById("newUsername").value
    var registerPassword = document.getElementById("newPassword").value
	var Repassword = document.getElementById("Repassword").value
    var newUser = {
        username: registerUser,
        password: registerPassword,
		repassword: Repassword
    }
    for (i = 0; i < objPeople.length; i++) {
        if(registerUser == objPeople[i].username){
            alert("that username is already use, please choose another")
            return
        } else if(registerPassword.length<6){
            alert("password is too short, include 6 or more characters")
        }else if(registerPassword === Repassword ){
            alert("password and repassword  không trùng khớp")
        }
    }
    objPeople.push(newUser)
    console.log(objPeople)
}
function Logout() {
    document.getElementById("inforname1").style.display = 'block';
    document.getElementById("infor").style.display = 'none';
    document.getElementById("logout").style.display = 'none';
	document.getElementById("inforname").style.display = 'none';
    document.getElementsById("formlogin").reset();
}
// function alertInformation() {
//     var username = 'admin';
//     var password = '123456';

//     var userName = document.getElementById('username').value;
//     var passWord = document.getElementById('password').value;

// if ((username == userName) && (password == passWord)) {
// 	swal("Good job", "Login Success");
// } else {
// 	sweetAlert("Oops...", "Username or Password was wrong");
// }
// }
// form.addEventListener('submit', (e) => {
// if (password.value.length <= 6) {
// 	alert("Password must be longer than 6 characters");
// }
// if(password.value.length < 6) {
// 	alert( "Password must be longer than 6 characters")
// 	// stop the function if this is found to be true
// 	return
// }
// })