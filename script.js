//Assign elements to variables

let password = document.querySelector('#password');
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let number = document.querySelector('#number');


// Event listener on first password field for key up. Each time checks for required characters. 

password.addEventListener('keyup', () => {
        if(/[A-Z]/.test(password.value)){
            uppercase.className = "liValid";

        } else {
            uppercase.className = "";
        }
        if(/[a-z]/.test(password.value)){
            lowercase.className = "liValid";

        } else {
            lowercase.className = "";
        }
        if(/\d/.test(password.value)){
            number.className = "liValid";
        } else {
            number.className = "";
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

