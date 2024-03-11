export function divide (a, b) {
    if (b===0) {
        return "attempted to divide by 0"
    }
    return a / b;
}

exports.divide = divide;
