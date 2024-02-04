function solve(...input) {

    let largestNumber = 0;

    for (let index = 0; index < input.length; index++) {
        if (input[index] > largestNumber ) {
            largestNumber = input[index];
        }
    }

    console.log(largestNumber);
}


solve(32, 4, 8, 50, 9, 10, 12);

