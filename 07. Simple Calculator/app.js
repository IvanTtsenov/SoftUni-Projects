function calculator() {

    let first;
    let second;
    let third;


    function add() {
        third.value = Number(first.value) + Number(second.value);
    }

    function subtract() {
        third.value = Number(first.value) - Number(second.value)
    }

    function init(sel1, sel2, selRes) {
        first = document.querySelector(sel1);
        second = document.querySelector(sel2);
        third = document.querySelector(selRes);
    }

    return {
        init,
        add,
        subtract
    }

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





