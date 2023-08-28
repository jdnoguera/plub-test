//Balanced group symbols:
const symbolPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
};
  
function balancedGroupSymbols(symbols) {
    const stack = [];

    for (let symbol of symbols) {
        if (symbolPairs[symbol]) {
            stack.push(symbol);
        } else if (symbol === '}' || symbol === ')' || symbol === ']') {
            if (symbolPairs[stack.pop()] !== symbol) {
                return false;
            }
        }
    }

    return !stack.length;
}

console.log(balancedGroupSymbols('{[][(])}'))