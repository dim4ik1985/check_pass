function getPasswordChecker(password) {
    return function (validPass) {
        return password === validPass;
    }
}

const passUser = getPasswordChecker('qwerty')
console.log(passUser(256))
console.log(passUser('qwerty'))


