const emailValidator = require('./validator/emailValidator')
const passwordStrengthValidator = require('./validator/passwordStrengthValidator')

const validators = 
{
    email: emailValidator,
    passwordStrength: passwordStrengthValidator.passkeyStrengthValidator
}

module.exports = {validators}