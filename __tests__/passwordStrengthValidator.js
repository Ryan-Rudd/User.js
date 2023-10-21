const lib = require('../lib')

const password1 = "StrongP@ssw0rd";
const password2 = "Weak123";

const isStrongPassword1 = lib.validators.passwordStrength(password1, 60);
if (isStrongPassword1) {
    console.log("Password 1 is strong enough.");
} else {
    console.log("Password 1 is not strong enough.");
}

const isStrongPassword2 = lib.validators.passwordStrength(password2, 60, {
    requireUppercase: false, 
    requireSpecialChar: false, 
});
if (isStrongPassword2) {
    console.log("Password 2 is strong enough.");
} else {
    console.log("Password 2 is not strong enough.");
}