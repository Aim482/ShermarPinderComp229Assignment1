
//added functions to grab input

var field = {}; //store information

document.addEventListener ("DOMContentLoaded", function (){
    field.firstName = document.getElementById('firstName');
    field.lastName = document.getElementById('lastName');
    field.email = document.getElementById('email');
    field.thoughts = document.getElementById('thoughts');
})//get elements



function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }//check to make 


function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   } //check email value is acceptable


   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }//check that value of field  is acceptable



   function isValid(){
    var valid = true;
    valid &= fieldValidation(field.firstName, isNotEmpty);
    valid &= fieldValidation(field.lastName, isNotEmpty);
    valid &= fieldValidation(field.email, isNotEmpty);
    valid &= fieldValidation(field.thoughts, isNotEmpty);

    return valid;
   }//return that field is valid


   class User {
    constructor(firstName, lastName, email, thoughts){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.thoughts = thoughts;
    }
   } //user constructor to hold values


   function submit(){
    
    if (isValid()){
        let user = new User(firstName.value, lastName.value, email.value, thoughts.value);

        alert('${user.firstName} thanks for submitting.')
        window.location.href = ('/')
    }
     else
    {
        alert("There was an error")
    }
   } //function to push values and redirect users