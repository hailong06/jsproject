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

$(document).ready(function(){
    // Login- js
	$('#login_btn').click(function(){
        var username = $('#username').val();
        var password = $('#password').val();
        var success = -1;
        $("#form").submit(function(event) {
            event.preventDefault();
        });
        for (i = 0; i< objPeople.length; i++){
            if(username == objPeople[i].username && password == objPeople[i].password) {
                $('#inforname1').css('display','none');
                $('#infor').css('display','block');
                $('#logout').css('display','block');
                alert("Welcome " + username);
                success=[i];
                prname = username;
                $('#inforname').html('Welcome ' + prname);
            }else if(username == '' || password == ''){

            }else{
                myText = $("#error-message1").text("Tài khoản hoặc mật khẩu không đúng");
                $('#error-message1').css('display', 'block');
                $('#success-message1').css('display', 'none');
            }
        } 
    });

    // Register-js
   
    $("#form").validate({
        rules: {
        	username: {
        		required: true,
        		maxlength: 15
        	},
        	password: {
        		required: true,
        		minlength: 5
        	}
        },
        messages: {
            username: {
        		required: "Bắt buộc nhập username",
        		maxlength: "Hãy nhập tối đa 15 ký tự",
                minlength: "Tên quá ngắn"
        	},
        	password: {
        		required: "Bắt buộc nhập password",
        		minlength: "Hãy nhập ít nhất 5 ký tự"
        	}
        }
    });

    $("#form2").validate({
        rules: {
            newUsername: {
                required: true,
        		maxlength: 15,
                minlength: 3
            },
            newEmail: {
                required: true,
                email: true
            },
            newPassword: {
                required: true,
                minlength: 5
            },
            Repassword: {
                required: true,
                minlength: 5
                // equalTo: "#newPassword"
            }
        },
        messages: {
            newUsername: {
                required: "Không để trống",
        		maxlength: "Quá dài rồi"
            },
            newEmail: {
                required: "Không để trống",
                email: "Vui lòng điền đúng định dạng Email"
            },
            newPassword: {
                required: "Không để trống",
                minlength: "Mật khẩu của bạn quá ngắn"
            },
            Repassword: {
                required: "Không để trống",
                minlength: "Mật khẩu của bạn quá ngắn",
                // equalTo: "Mật khẩu của bạn không trùng khớp"
            }
        }
    });
    $('#register_btn').click(function(){
        var newUsername = $('#newUsername').val();
        var newPassword = $('#newPassword').val();
        var Repassword = $('#Repassword').val();
        var newEmail = $('#newEmail').val();
        $("#form2").submit(function(event) {
            event.preventDefault();
        });
        if (newUsername == '' || newPassword == '' || newEmail == '' || Repassword == '' ) {
            
        }else if( Repassword != newPassword ){
            myText = $("#error-message2").text("Mật khẩu không trùng khớp");
            $('#error-message2').css('display', 'block');
            $('#success-message2').css('display', 'none');
        }else if (newEmail.indexOf("@") < 0 || newEmail.indexOf(".") < 0) {
            
        }else {
            var newUser = {
                username: newUsername,
                password: newPassword,
                repassword: Repassword
            }
            for(i=0;i<objPeople.length;i++){ 
                if(newUsername == objPeople[i].username){
                    myText = $("#error-message2").text("Tài khoản đã tồn tại");
                    $('#error-message2').css('display', 'block');
                    $('#success-message2').css('display', 'none');
                    return;
                }
            }
            objPeople.push(newUser);
            console.log(objPeople);
            myText = $("#success-message2").text("Đăng kí thành công");
            $('#error-message2').css('display', 'none');
            $('#success-message2').css('display', 'block');
            return;
        }
    });
    $('#logout').click(function(){
        $('#inforname1').css('display','block');
        $('#infor').css('display','none');
        $('#logout').css('display','none');
        $('#inforname').css('display','none');
        $('#formlogin').trigger(reset);
    });
});