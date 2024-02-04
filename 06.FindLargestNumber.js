function findLargestNumber(...input) {
    const sortedInput = input.sort(function(a, b) {
        return b - a;
    });
    console.log(sortedInput[0]);
}

findLargestNumber(5, 10, 40, 20, 30, 50, 80, 34)