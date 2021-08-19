const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');
// const username = document.getElementById('.usename');
// const password = document.getElementById('.password');
// const form = document.getElementById('form');
// const errorElement = document.getElementById('error');


signupBtn.onclick = function(){
    formBx.classList.add('active');
    body.classList.add('active');
}
signinBtn.onclick = function(){
    formBx.classList.remove('active');
    body.classList.remove('active');
}
// function alertInformation() {
//     var username = 'admin';
//     var password = '123456';

//     var userName = document.getElementById('username').value;
//     var passWord = document.getElementById('password').value;

//     if ((username == userName) && (password == passWord)) {
//         swal("Good job", "Login Success");
//     } else {
//         sweetAlert("Oops...", "Username or Password was wrong");
//     }
//   }
// form.addEventListener('submit', (e) => {
//     let messenger = [];
//     if (password.value.length <= 6) {
//         messenger.push("Password must be longer than 6 characters")
//     }
//     if (messenger.length > 0){
//         e.preventDefault();
//         errorElement.innerText = messenger.join(', ');
//     }
// })
var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "123456"
	}
]
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect username or password")
}