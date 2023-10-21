const lib = require('../lib')

const password1 = "StrongP@ssw0rd";
const password2 = "Weak123";

// Example 1: Checking if a password is strong (all criteria enforced)
const isStrongPassword1 = passkeyStrengthValidator(password1, 60);
if (isStrongPassword1) {
    console.log("Password 1 is strong enough.");
} else {
    console.log("Password 1 is not strong enough.");
}

// Example 2: Checking if a password is strong (some criteria optional)
const isStrongPassword2 = passkeyStrengthValidator(password2, 60, {
    requireUppercase: false, // Uppercase letters are not required
    requireSpecialChar: false, // Special characters are not required
});
if (isStrongPassword2) {
    console.log("Password 2 is strong enough.");
} else {
    console.log("Password 2 is not strong enough.");
}