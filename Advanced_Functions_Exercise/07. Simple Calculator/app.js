function calculator() {
    let inputField1;
    let inputField2;
    let outputField;

    function init(selector1, selector2, resultSelector) {
        inputField1 = document.querySelector(selector1);
        inputField2 = document.querySelector(selector2);
        outputField = document.querySelector(resultSelector);
    }
    function add() {
        outputField.value = Number(inputField1.value) + Number(inputField2.value);
    }
    function subtract() {
        outputField.value = Number(inputField1.value) - Number(inputField2.value);
    }
    
    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
