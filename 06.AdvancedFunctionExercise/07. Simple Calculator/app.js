function calculator() {
    
    let num1, num2, result;

    return {
        init,
        add,
        subtract
    };

    function init(selector1, selector2, resultSelector) {
        num1 = document.querySelector(selector1);
        num2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value)
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value)
    }
}

const calculate = calculator();
calculate.init ('#num1', '#num2', '#result');




