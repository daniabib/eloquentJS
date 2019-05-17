function isEven(n) {
    // Zero is even
    if (n == 0) { return true }
    // One is odd   
    else if (n == 1) { return false }
    else {
        return isEven(n-2);
    }
}

// Implementation from the book:
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n); // Transforma o número negativo em positivo e determina se é par ou ímpar
    else return isEven(n - 2);
}