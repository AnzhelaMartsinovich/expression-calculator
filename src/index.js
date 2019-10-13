function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
        let str = expr.replace(/\s/g, '');
        let sing;
        let value;


        for (let char of str) {
            if (char === '+') {
                value = Number(str[0]) + Number(str[2]);
            }
            if (char === '-') {
                sing = char;
                value = Number(str[0]) - Number(str[2]);
            }
            if (char === '/') {
                sing = char;
                value = Number(str[0]) / Number(str[2]);
            }
            if (char === '*') {
                sing = char;
                value = Number(str[0]) * Number(str[2]);
            }

            // throw ("TypeError: Division by zero.");
        }
        return value;
    
}

module.exports = {
    expressionCalculator
}