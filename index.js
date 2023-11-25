const sign = document.getElementById('sign');
const result = document.getElementById('result');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
let answer = document.getElementById('final');
const clear = document.getElementById('clear');''

function clickPlus(){
    sign.innerHTML = '+';
}
function clickMinus(){
    sign.innerHTML = '-';
}
function clickMult(){
    sign.innerHTML = '*';
}
function clickDiv(){
    sign.innerHTML = '/';
}

function clickRes(){
    let a = parseInt(document.getElementById('input1').value);
    let b = parseInt(document.getElementById('input2').value);
    if(sign.innerHTML == '+'){
        answer.innerHTML = a+b;
    } else if(sign.innerHTML == '-') {
        answer.innerHTML = a-b;
    } else if(sign.innerHTML == '*'){
        answer.innerHTML = a*b;       
    }else if(sign.innerHTML == '/'){
        answer.innerHTML = a/b;
    }else{
        alert('please choose an operator');
    }
}
function clickClear(){
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    answer.innerHTML = 'Result';
    sign.innerHTML = 'Sign';
}    

plus.addEventListener('click', clickPlus);
minus.addEventListener('click', clickMinus);
multiply.addEventListener('click',clickMult);
divide.addEventListener('click',clickDiv);
result.addEventListener('click',clickRes);
clear.addEventListener('click',clickClear);





