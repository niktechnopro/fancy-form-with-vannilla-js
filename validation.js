//this version of form validation was built with plain JavaScript




function formValidation(){
    //alert('clicked on submit')
    //storing fied values in variables
    var name = document.getElementsByClassName('fullName')[0].value;
    var address = document.getElementsByClassName('address')[0].value;
    var email = document.getElementsByClassName('email')[0].value;
    var phone = document.getElementsByClassName('phone')[0].value;
    var password = document.getElementsByClassName('password')[0].value;
    var password2 = document.getElementsByClassName('password2')[0].value;
    var mySkills = document.getElementsByClassName('mySkills')[0].value;
    var years = document.getElementsByClassName('years')[0].value;
    // Regular Expression For Email
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var checkbox = document.getElementsByClassName('privacy')[0].checked;
    //conditions/veryfications
    if (name == '' || name.length <= 2){
        document.querySelector(".full-name-error").classList.remove('error');//error is a class in CSS with display:none
        document.getElementsByClassName("full-name-error")[0].innerHTML = "Full name is required!!!";
        document.getElementsByClassName("full-name-error")[0].style.color = "red";
        console.log('full-name-error');
        return false;
    }else if(address == '' || address.length <= 2){//also need to add if no numbers in address;
        document.querySelector(".full-name-error").classList.add('error');
        document.querySelector(".address-error").classList.remove('error');
        document.getElementsByClassName("address-error")[0].innerHTML = "Full address is required!!!";
        document.getElementsByClassName("address-error")[0].style.color = "red";
        console.log('full-address-error');
        return false;
    }else if (email == "" || !email.match(emailReg)){ // checking on valid email;
        document.querySelector(".address-error").classList.add('error');
        document.querySelector(".email-error").classList.remove('error');
        document.getElementsByClassName("email-error")[0].style.color = "red";
        document.getElementsByClassName("email-error")[0].innerHTML = "Invalid email address";
        return false;
    }else if (phone.length < 10){ // checking for valid phone number;
        document.querySelector(".email-error").classList.add('error');
        document.querySelector(".phone-error").classList.remove('error');
        document.getElementsByClassName("phone-error")[0].style.color = "red";
        document.getElementsByClassName("phone-error")[0].innerHTML = "The Contact # must be 10 digit long!";
        return false;
    }else if (password.length < 6){
        document.querySelector(".phone-error").classList.add('error');
        document.querySelector(".password-error").classList.remove('error');
        document.getElementsByClassName("password-error")[0].style.color = "red";
        document.getElementsByClassName("password-error")[0].innerHTML = "The password must be at least 6 characters";
        return false;
    }else if (password != password2){
        document.querySelector(".password-error").classList.add('error');
        document.querySelector(".password2-error").classList.remove('error');
        document.getElementsByClassName("password2-error")[0].style.color = "red";
        document.getElementsByClassName('password2-error')[0].innerHTML = "passwords do not match";
        return false;
    }else if (mySkills.length < 1){
        console.log("no skills")
        document.querySelector(".password2-error").classList.add('error');
        document.querySelector(".mySkills-error").classList.remove('error');
        document.getElementsByClassName("mySkills-error")[0].style.color = "red";
        document.getElementsByClassName('mySkills-error')[0].innerHTML = "Please describe your skills";
        console.log(checkbox);
        return false;
    }else if (checkbox != true){
        console.log(checkbox);
        document.querySelector(".mySkills-error").classList.add('error');
        document.querySelector(".checkbox-error").classList.remove('error');
        document.getElementsByClassName("checkbox-error")[0].style.color = "red";
        document.getElementsByClassName("checkbox-error")[0].innerHTML = "Please agree to terms and then click submit button";
        console.log('message bout the button')
        return false; 
    }else{
        document.querySelector(".checkbox-error").classList.add('error');
        document.getElementsByClassName('checkbox-error')[0].innerHTML = "click on submit button"
        document.getElementsByClassName('submit')[0].value = "all good - sending";
        return true; //if everything is hunkydory - form can be send;
    }
    
}
 