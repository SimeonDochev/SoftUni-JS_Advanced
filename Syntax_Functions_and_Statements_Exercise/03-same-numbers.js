function sameNumbers(intNum) {
    const strNum = String(intNum);
    let result = Number(strNum[0]);
    let isSame = true;

    for (let i = 1; i < strNum.length; i++) {
        result += Number(strNum[i]);
        
        if (strNum[i] != strNum[i-1]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(result);
}

sameNumbers(2222222);
