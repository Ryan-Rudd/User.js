/**
 * Checks if a password meets the minimum length requirement.
 *
 * @param {string} passwordStr - The password string to be checked.
 * @param {number} minLength - The minimum required length for the password.
 * @returns {boolean} True if the password meets the minimum length requirement; otherwise, false.
 */
function hasMinimumLength(passwordStr, minLength) {
    return passwordStr.length >= minLength;
}

/**
 * Checks if a password contains at least one uppercase letter.
 *
 * @param {string} passwordStr - The password string to be checked.
 * @returns {boolean} True if the password contains at least one uppercase letter; otherwise, false.
 */
function hasUppercase(passwordStr) {
    return /[A-Z]/.test(passwordStr);
}

/**
 * Checks if a password contains at least one lowercase letter.
 *
 * @param {string} passwordStr - The password string to be checked.
 * @returns {boolean} True if the password contains at least one lowercase letter; otherwise, false.
 */
function hasLowercase(passwordStr) {
    return /[a-z]/.test(passwordStr);
}

/**
 * Checks if a password contains at least one number.
 *
 * @param {string} passwordStr - The password string to be checked.
 * @returns {boolean} True if the password contains at least one number; otherwise, false.
 */
function hasNumber(passwordStr) {
    return /[0-9]/.test(passwordStr);
}

/**
 * Checks if a password contains at least one special character.
 *
 * @param {string} passwordStr - The password string to be checked.
 * @returns {boolean} True if the password contains at least one special character; otherwise, false.
 */
function hasSpecialChar(passwordStr) {
    return /[!@#$%^&*]/.test(passwordStr);
}

/**
 * Validates the strength of a password string.
 *
 * @param {string} passwordStr - The password string to be validated.
 * @param {number} minStrength - The minimum required strength for the password.
 * @param {object} options - Optional configuration options for validation criteria.
 * @param {number} [options.minLength=8] - The minimum required length for the password.
 * @param {boolean} [options.requireUppercase=true] - Whether to require at least one uppercase letter.
 * @param {boolean} [options.requireLowercase=true] - Whether to require at least one lowercase letter.
 * @param {boolean} [options.requireNumber=true] - Whether to require at least one number.
 * @param {boolean} [options.requireSpecialChar=true] - Whether to require at least one special character.
 * @returns {boolean} True if the password meets the minimum strength requirement; otherwise, false.
 * @throws {Error} Throws an error if the provided passwordStr parameter is not a string or if minStrength is not a valid number.
 */
function passkeyStrengthValidator(
    passwordStr,
    minStrength,
    {
        minLength = 8,
        requireUppercase = true,
        requireLowercase = true,
        requireNumber = true,
        requireSpecialChar = true
    } = {}
) {
    if (typeof passwordStr !== 'string') {
        throw new Error('passwordStr must be a string.');
    }

    if (typeof minStrength !== 'number' || isNaN(minStrength) || minStrength < 0 || minStrength > 100) {
        throw new Error('minStrength must be a valid number between 0 and 100.');
    }

    let strength = 0;
    strength += hasMinimumLength(passwordStr, minLength) ? 20 : 0;
    strength += requireUppercase && hasUppercase(passwordStr) ? 20 : 0;
    strength += requireLowercase && hasLowercase(passwordStr) ? 20 : 0;
    strength += requireNumber && hasNumber(passwordStr) ? 20 : 0;
    strength += requireSpecialChar && hasSpecialChar(passwordStr) ? 20 : 0;

    return strength >= minStrength;
}

module.exports = {
    passkeyStrengthValidator,
    hasMinimumLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
};

