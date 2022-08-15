
document.getElementById('login-button').addEventListener('click', function(){
    // user email
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
    //user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 'rubel@gmail.com' && userPassword == '12345'){
        window.location.href='banking.html';    
    }else{
         console.log('Invalid Credentials');
    }

});


