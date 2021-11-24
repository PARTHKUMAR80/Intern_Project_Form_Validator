function validate() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm-password').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;

    if (username == "") {
        document.getElementById('username-div').innerHTML = "***This field is required...";
        return false;
    }

    if ((username.length <= 4) || (username.length > 25)) {
        document.getElementById('username-div').innerHTML = "***username length must be between 4 and 25..."
        return false;
    }

    if (isNaN(username) == false) {
        document.getElementById('username-div').innerHTML = "***only characters are allowed...";
        return false;
    }

    document.getElementById('username-div').innerHTML = "";
    document.getElementById('username').style.background = "blue";

    if (password == "") {
        document.getElementById('password-div').innerHTML = "***This field is required...";
        return false;
    }

    if (password.length < 6 || password.length > 25) {
        document.getElementById('password-div').innerHTML = "***password length must be between 6 and 20...";
        return false;
    }

    if (confirm_password == "") {
        document.getElementById('confirm-password-div').innerHTML = "***This is field is required...";
        return false;
    }

    if (password != confirm_password) {
        document.getElementById('password-div').innerHTML = "***password and confirm passwords are not matching...";
        document.getElementById('confirm-password-div').innerHTML = "***password and confirm passwords are not matching...";
        return false;
    }

    document.getElementById('password-div').innerHTML = "";
    document.getElementById('confirm-password-div').innerHTML = "";

    if (email == "") {
        document.getElementById('email-div').innerHTML = "***This field is required...";
        return false;
    }

    if (email.indexOf('@') == 0) {
        document.getElementById('email-div').innerHTML = "***Invalid Position for @..."
        return false;
    }

    if (email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.') {
        document.getElementById('email-div').innerHTML = "***Invalid Position for .";
        return false;
    }

    document.getElementById('email-div').innerHTML = "";

    if (mobile == "") {
        document.getElementById('mobile-div').innerHTML = "***This field is required...";
        return false;
    }

    if (isNaN(mobile)) {
        document.getElementById('mobile-div').innerHTML = "***only numbers are allowed...";
        return false;
    }

    if (mobile.length != 10) {
        document.getElementById('mobile-div').innerHTML = "***mobile number must be 10 digits...";
        return false;
    }

    document.getElementById('mobile-div').innerHTML = "";

    alert('The form has been submitted successfully');

    username = document.getElementById('username').value = "";
    password = document.getElementById('password').value = "";
    confirm_password = document.getElementById('confirm-password').value = "";
    email = document.getElementById('email').value = "";
    mobile = document.getElementById('mobile').value = "";

    return true;
}