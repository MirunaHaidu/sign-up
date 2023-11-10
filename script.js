document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('signupForm');

    let button = document.querySelector('.button');

    button.addEventListener('click', function() {
        validateForm();
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
});


function validateForm() {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone_number').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm_password').value;

    document.getElementById('error-first-name').innerHTML = '';
    document.getElementById('error-last-name').innerHTML = '';
    document.getElementById('error-email').innerHTML = '';
    document.getElementById('error-phone').innerHTML = '';
    document.getElementById('error-password').innerHTML = '';
    document.getElementById('error-password-confirm').innerHTML = '';

    if (!firstName) {
        document.getElementById('error-first-name').innerHTML = 'Please enter your first name';
        return;
    }

    if (!lastName) {
        document.getElementById('error-last-name').innerHTML = 'Please enter your last name';
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById('error-email').innerHTML = 'Please enter a valid email address';
        return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        document.getElementById('error-phone').innerHTML = 'Please enter a valid phone number';
        return;
    }

    if (!validatePassword(password)) {
        document.getElementById('error-password').innerHTML = 'Password must be at least 8 characters long';
        return;
    }    

    if (password !== confirmPassword) {
        document.getElementById('error-password-confirm').innerHTML = 'Passwords do not match';
        return;
    }

    document.getElementById('signupForm').submit();
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/; 
    return phoneRegex.test(phoneNumber);
}

function validatePassword(password) {
    return password.length >= 8;
}