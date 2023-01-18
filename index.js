function getPasswordChecker(password) {
    let pass = 'qwerty';

    return function () {
        return password === pass;
    }
}

const pass1 = getPasswordChecker('qwerty')
const pass2 = getPasswordChecker(123)
console.log(pass1)
console.log(pass1())
console.log(pass2())


