function rotationArray(arr, count) {


    for (let index = 0; index < count; index++) {
        const firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr);
}


rotationArray([51, 47, 32, 61, 21], 3)