var formone = document.querySelector('.form');
var fullname = document.querySelector('.name');
var namemsg = document.querySelector('.name-error');
var emailaddress = document.querySelector('.email');
var emailmsg = document.querySelector('.email-error');
var pin = document.querySelector('.password');
var pinmsg = document.querySelector('.password-error');
var repin = document.querySelector('.repassword');
var repinmsg = document.querySelector('.repassword-error');


formone.addEventListener('submit', function(e){
    e.preventDefault();

    namemsg.textContent = '';
    emailmsg.textContent = '';
    pinmsg.textContent = '';
    repinmsg.textContent = '';

    if(fullname.value === ''){
        namemsg.textContent = 'Full name is required';
    }
    if(emailaddress.value === ''){
        emailmsg.textContent = 'Email is required';
    }
    if(pin.value === ''){
        pinmsg.textContent = 'Password is required';
    }
    if(repin.value === ''){
         repinmsg.textContent = 'Confirm your password';
    }
    if(repin.value !== pin.value){
        repinmsg.textContent = 'Incorrect password';
    }







         const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;

     if (passwordRegex.test(pin.value)) {
     console.log("Password is valid and strong.");

     } else {
            pinmsg.textContent = "Password should be 6-15 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    
  }

    if( fullname.value !== "" && email.value !== "" && password.value !== "" && repassword.value !== "" && password.value.length >= 6 && program.value !== ""){
        fullname.value = "";
        emailaddress.value = "";
        pin.value = "";
        repin.value = "";

        window.location.href = "home.html";
    
    }
});