//Snail rearrangement:
function validateSquareMatrix(array) {
    const numRows = array.length;
    if (numRows === 0) return false;
  
    for (let i = 0; i < numRows; i++) {
        if (array[i].length !== numRows) {
            return false;
        }
    }
  
    return true;
}
  
function snail(array) {
    if (!validateSquareMatrix(array)) {
        throw new Error("La matriz no es cuadrada.");
    }
  
    const result = [];
  
    while (array.length > 0) {
        result.push(...array.shift());
  
        for (let row of array) {
            if (row.length > 0) {
                result.push(row.pop());
            }
        }

        if (array.length > 0) {
            result.push(...array.pop().reverse());
        }
  
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length > 0) {
                result.push(array[i].shift());
            }
        }
    }
  
    return result;
}

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(snail(array));