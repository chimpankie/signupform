//Assign elements to variables

let password = document.querySelector('#password');
let confirm = document.querySelector('#confirmPassword')
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let number = document.querySelector('#number');


// Event listener on first password field for key up. Each time checks for required characters. 

password.addEventListener('keyup', () => {
        if(/[A-Z]/.test(password.value)){
            uppercase.className = "liValid";
            document.getElementById("uppercaseIcon").src = "images/icons/checkmark-svgrepo-com.svg";

        } else {
            uppercase.className = "";
            document.getElementById("uppercaseIcon").src = "images/icons/cross-svgrepo-com.svg";

        }
        if(/[a-z]/.test(password.value)){
            lowercase.className = "liValid";
            document.getElementById("lowercaseIcon").src = "images/icons/checkmark-svgrepo-com.svg";


        } else {
            lowercase.className = "";
            document.getElementById("lowercaseIcon").src = "images/icons/cross-svgrepo-com.svg";
        }
        if(/\d/.test(password.value)){
            number.className = "liValid";
            document.getElementById("numberIcon").src = "images/icons/checkmark-svgrepo-com.svg";

        } else {
            number.className = "";
            document.getElementById("numberIcon").src = "images/icons/cross-svgrepo-com.svg";

        }
        if(confirmPassword.value === password.value){
            confirmPassword.setCustomValidity("");
        } else {
            confirmPassword.setCustomValidity("Invalid Field.");
    
        }
 
    })

// Event listener for confirm field - checks if it is a match to password field

confirmPassword.addEventListener('keyup', () => {
    if(confirmPassword.value === password.value){
        confirmPassword.setCustomValidity("");
    } else {
        confirmPassword.setCustomValidity("Invalid Field.");

    }
})
//Function to check if password matches

function checkPassword(input){
    if(passwordInput.textContent = confirmInput.textContent){
        return true;
    } else {
        return false;
    }
}

