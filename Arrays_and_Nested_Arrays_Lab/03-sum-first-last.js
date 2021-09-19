function sumFirstLast(strArr) {
    intArr = strArr.map(Number)

    return intArr[0] + intArr[intArr.length - 1];
}

console.log(sumFirstLast(['20', '30', '40']));
