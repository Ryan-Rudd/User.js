const lib = require('../../lib')

const username1 = "john_doe";
const username2 = "JoHN_Doe123";
const username3 = "user.name";

// Example 1: Validate a username with default criteria (lowercase, no numbers, no special characters, no underscore, no dots)
const isValidUsername1 = lib.validators.username(username1);
console.log(`Username 1 is valid: ${isValidUsername1}`); // true

// Example 2: Validate a username with custom criteria (allowing uppercase, numbers, and underscores)
const isValidUsername2 = lib.validators.username(username2, {
    allowUppercase: true,
    allowNumbers: true,
    allowUnderscore: true,
});
console.log(`Username 2 is valid: ${isValidUsername2}`); // true

// Example 3: Validate a username with custom criteria (allowing dots and specifying allowed special characters)
const isValidUsername3 = lib.validators.username(username3, {
    allowDots: true,
    allowSpecialChars: true,
    allowedSpecialChars: "!@#",
});
console.log(`Username 3 is valid: ${isValidUsername3}`); // false
