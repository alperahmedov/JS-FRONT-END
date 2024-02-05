"use strict";

function checkifdigitsissame(number) {
    const digitstring  = number.toString();
    let inConsistent = true;
    let sum = Number(digitstring[0]);

    for (let index = 1; index < digitstring.length; index++) {
        sum += Number(digitstring[index]);
        if (digitstring[index] !== digitstring[index -1]) {
            inConsistent = false;
        }
    }

    console.log(inConsistent);
    console.log(sum);
}

checkifdigitsissame(1234);