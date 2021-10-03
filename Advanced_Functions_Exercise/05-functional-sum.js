function add(num1) {
    let sum = num1;

    function secondAdd(num2) {
        sum += num2
        return secondAdd;
    }

    secondAdd.toString = () => {
        return sum;
    }
    
    return secondAdd;
}