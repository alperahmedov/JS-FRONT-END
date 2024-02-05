function checkifdigitsissame(number) {
    const digits  = Array.from(String(number), Number);
    const isConsistent = new Set(digits).size === 1;
    const sum = digits.reduce(function(total, number) {
        return total + number

    }, 0)

    console.log(isConsistent);
    console.log(sum);

}

checkifdigitsissame(222222)