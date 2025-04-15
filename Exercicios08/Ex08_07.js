function calcular(num1, num2, operador) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Erro: divisão por zero!";
            }
        case '**':
            return num1 ** num2;
        default:
            return "Operador inválido";
    }
}


console.log(calcular(5, 7, '+'));
console.log(calcular(5, 7, '*'));  
console.log(calcular(5, 7, '/'));  
console.log(calcular(5, 7, '**'));
console.log(calcular(3, 0, '/'));  