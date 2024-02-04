function calculateOddandEvenNumbers(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    arr.forEach(function (element) {
        if (element % 2 === 0) {
            sumEven += element;
        }   else {
            sumOdd += element;
        }
    });
    console.log(sumEven - sumOdd);
}

calculateOddandEvenNumbers([3,5,7,9])