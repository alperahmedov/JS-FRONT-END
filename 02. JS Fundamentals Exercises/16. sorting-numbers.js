function solve(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const resultArr = [];
    const length = arr.length;

    for (let index = 0; index < length; index++) {
        if (index % 2 === 0) {
            resultArr.push(sortedArr.shift());
        } else {
            resultArr.push(sortedArr.pop());
        }
    }
    console.log(resultArr);
}

solve([1,65, 3, 52, 48, 63, 31, -3, 18, 56]);