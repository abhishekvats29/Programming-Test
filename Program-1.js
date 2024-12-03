class Calculator {
    constructor(a, b, operation) {
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate() {
        switch(this.operation.toLowerCase()) {
            case 'addition':
                return this.add();
            case 'subtraction':
                return this.subtract();
            case 'multiplication':
                return this.multiply();
            case 'division':
                return this.divide();
            default:
                return 'Invalid operation';
        }
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b === 0) {
            return 'Error: Division by zero';
        }
        return this.a / this.b;
    }
}

// Example usage:
const calculator1 = new Calculator(10.5, 5.5, 'addition');
console.log(`Addition: ${calculator1.calculate()}`); // Output: Addition: 16

const calculator2 = new Calculator(10.5, 5.5, 'subtraction');
console.log(`Subtraction: ${calculator2.calculate()}`); // Output: Subtraction: 5

const calculator3 = new Calculator(10.5, 5.5, 'multiplication');
console.log(`Multiplication: ${calculator3.calculate()}`); // Output: Multiplication: 57.75

const calculator4 = new Calculator(10.5, 5.5, 'division');
console.log(`Division: ${calculator4.calculate()}`); // Output: Division: 1.9090909090909092

const calculatorZero = new Calculator(10.5, 0, 'division');
console.log(`Division: ${calculatorZero.calculate()}`); // Output: Error: Division by zero
