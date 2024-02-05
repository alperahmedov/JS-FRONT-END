function solve (num){
    const digitstring = num.toString();
    let sum = 0;

    for (let index = 0; index < digitstring.length; index++) {
        sum += Number(digitstring[index]);

    }
    console.log(sum)
}

solve(543)