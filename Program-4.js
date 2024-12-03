function countMultiples(numbers) {
    const multiples = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = {};

    multiples.forEach(multiple => {
        result[multiple] = numbers.filter(number => number % multiple === 0).length;
    });

    return result;
}

// Example usage:
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const output = countMultiples(input);
console.log(output); 
// Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
