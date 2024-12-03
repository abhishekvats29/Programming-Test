function generateSeries(a) {
    let result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }
    return result.join(', ');
}

// Example usage:
const a1 = 1;
console.log(`Input: ${a1}, Output: ${generateSeries(a1)}`); // Output: 1

const a2 = 2;
console.log(`Input: ${a2}, Output: ${generateSeries(a2)}`); // Output: 1, 3

const a3 = 3;
console.log(`Input: ${a3}, Output: ${generateSeries(a3)}`); // Output: 1, 3, 5

const a4 = 4;
console.log(`Input: ${a4}, Output: ${generateSeries(a4)}`); // Output: 1, 3, 5, 7

const aX = 10; // Example for x = 10
console.log(`Input: ${aX}, Output: ${generateSeries(aX)}`); // Output: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
