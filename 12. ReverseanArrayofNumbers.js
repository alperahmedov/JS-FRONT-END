function solve(count, arr) {
    let result2 = arr.slice(0, count).reverse().join(' ');
    let resultArr = []
    for (let index = 0; index < count; index++) {
        resultArr.push(arr[index]);
    }
    console.log(resultArr.reverse().join(" "));
    console.log(result2)
}


solve(3, [10, 20, 30, 40, 50])