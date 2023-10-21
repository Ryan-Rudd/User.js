/**
 * Validates a username string based on various configuration options.
 *
 * @param {string} usernameStr - The username string to be validated.
 * @param {object} options - Optional configuration options for validation criteria.
 * @param {number} [options.minLength=3] - The minimum required length for the username.
 * @param {number} [options.maxLength=20] - The maximum allowed length for the username.
 * @param {boolean} [options.allowUppercase=false] - Whether to allow uppercase letters in the username.
 * @param {boolean} [options.allowNumbers=true] - Whether to allow numbers in the username.
 * @param {boolean} [options.allowSpecialChars=false] - Whether to allow special characters in the username.
 * @param {string} [options.allowedSpecialChars=] - A custom list of allowed special characters in the username.
 * @param {boolean} [options.allowUnderscore=false] - Whether to allow underscores (_) in the username.
 * @param {boolean} [options.allowDots=false] - Whether to allow dots (.) in the username.
 * @returns {boolean} True if the username meets the specified criteria; otherwise, false.
 * @throws {Error} Throws an error if the provided usernameStr parameter is not a string.
 */
function usernameValidator(usernameStr, options = {}) {
    const {
        minLength = 3,
        maxLength = 20,
        allowUppercase = false,
        allowNumbers = true,
        allowSpecialChars = false,
        allowedSpecialChars = '',
        allowUnderscore = false,
        allowDots = false,
    } = options;

    if (typeof usernameStr !== 'string') {
        throw new Error('usernameStr must be a string.');
    }

    const regexPattern = createRegexPattern(
        allowUppercase,
        allowNumbers,
        allowSpecialChars,
        allowedSpecialChars,
        allowUnderscore,
        allowDots
    );

    // Check if the username meets the length requirements
    const isLengthValid = usernameStr.length >= minLength && usernameStr.length <= maxLength;

    // Check if the username matches the regex pattern
    const isPatternValid = regexPattern.test(usernameStr);

    return isLengthValid && isPatternValid;
}

/**
 * Creates a regular expression pattern based on options.
 *
 * @param {boolean} allowUppercase - Whether to allow uppercase letters in the username.
 * @param {boolean} allowNumbers - Whether to allow numbers in the username.
 * @param {boolean} allowSpecialChars - Whether to allow special characters in the username.
 * @param {string} allowedSpecialChars - A custom list of allowed special characters in the username.
 * @param {boolean} allowUnderscore - Whether to allow underscores (_) in the username.
 * @param {boolean} allowDots - Whether to allow dots (.) in the username.
 * @returns {RegExp} Regular expression pattern for username validation.
 */
function createRegexPattern(
    allowUppercase,
    allowNumbers,
    allowSpecialChars,
    allowedSpecialChars,
    allowUnderscore,
    allowDots
) {
    let pattern = '^[a-z';

    if (allowUppercase) {
        pattern += 'A-Z';
    }

    if (allowNumbers) {
        pattern += '0-9';
    }

    if (allowSpecialChars) {
        if (allowedSpecialChars) {
            pattern += allowedSpecialChars.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        } else {
            pattern += '\\W'; // Matches any non-word character
        }
    }

    if (allowUnderscore) {
        pattern += '_';
    }

    if (allowDots) {
        pattern += '\\.';
    }

    pattern += ']+$';

    return new RegExp(pattern);
}

module.exports = usernameValidator;
