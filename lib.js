const emailValidator = require('./validator/emailValidator')
const passwordStrengthValidator = require('./validator/passwordStrengthValidator')
const usernameValidator = require('./validator/usernameValidator')

const validators = 
{
    email: emailValidator,
    passwordStrength: passwordStrengthValidator.passkeyStrengthValidator,
    username: usernameValidator
}

module.exports = {validators}