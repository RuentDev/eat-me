
// function isValidEmail(value) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(value).toLowerCase());
// }

// function validateEmail(value, setEmailError) {
//     if (value.length == "") {
//         setEmailError("You must put you email")
//     }
//     else if (isValidEmail(value)) {
//         setEmailError("")
//     }
//     else {
//         setEmailError("Invalid Email")
//     }
// }

function validateUsername(value, setUsernameError) {
    if(value.length === ""){
        setUsernameError("You must put your username")
    }else if(value.length < 5) {
        setUsernameError("Please give at least 5 character")
    }else {
        setUsernameError("")
    }
}

function validatePassword(value, setPasswordError) {
    if (value.length < 9) {
        setPasswordError("Password must be 9 characters")
    }
     else {
        setPasswordError("")
    }
}


function validateInput(value, minLength, setError) {
    if (value.length < minLength) {
        setError("Please input min of 8 character")
    } else {
        setError("")
    }
}

function validateProductInput(value, setError) {
    if (value.length <= 0 ) {
        setError("Please fill up the missing field(s)!")
    } else { 
        setError("");
    }
}

function validateInputInteger(value, setError) {
    if (!Number(value)) {
        setError("Please input a valid input");
    }else {
        setError("");
    }
}

const Utils = {
   validateUsername,
   validatePassword,
   validateInput,
   validateInputInteger,
   validateProductInput,
};

export default Utils;