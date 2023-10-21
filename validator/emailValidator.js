/**
 * Validates an email address string based on a regular expression pattern.
 *
 * @param {string} emailStr - The email address to be validated.
 * @returns {boolean} True if the email address is valid; otherwise, false.
 * @throws {Error} Throws an error if the provided emailStr parameter is not a string.
 *
 * @example
 * const isValidEmail = validateEmail("user@example.com");
 * if (isValidEmail) {
 *   console.log("Valid email address.");
 * } else {
 *   console.log("Invalid email address.");
 * }
 */
const validateEmail = (emailStr) =>
{
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
    return re.test(emailStr)
}

module.exports = validateEmail;
