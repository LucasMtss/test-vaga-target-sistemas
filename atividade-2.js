function fibonacci(number){
    if (number < 0) return false;
    if (number === 0 || number === 1) return true;

    let current = 1;
    let previous = 0;

    while (current <= number) {
        if (current === number) return true;
        let aux = current;
        current += previous;
        previous = aux;
    }

    return false;
}

console.log(fibonacci(13))