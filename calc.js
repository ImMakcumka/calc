let input = document.querySelector('.input')
let power = "";
function insert(num){
    console.log(input)
    if(input.textContent == 0) {
        input.textContent = "";
        input.textContent = input.textContent + num;
    } else
        input.textContent = input.textContent + num;
}

function clean(){
    input.textContent = "0"
}

function back(){
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length-1);
    if(input.textContent == 0) {
        input.textContent = "0";
    }
}

function equal(){
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if(exp){
        input.textContent = eval(exp);
    }
}

function percent() {
    if(input.textContent == 0) {
        input.textContent = "головой подумай))"
    }
    input.textContent = eval(input.textContent)/100;
}

function pi() {
    if(input.textContent == 0) {
        input.textContent = "";
    }
    input.textContent = input.textContent + Math.PI
}

function e() {
    if(input.textContent == 0) {
        input.textContent = "";
    }
    input.textContent = input.textContent + Math.E
}

function sqrt() {
    input.textContent = Math.sqrt(eval(input.textContent));
}

function degree() {
    power = input.textContent;
    input.textContent += "^";
}

function factorial(n) {
    return (n != 1) ? n * factorial(n-1) : 1;
    
}
function fact() {
    input.textContent = factorial(+eval(input.textContent))
}

function dot() {
    if(input.textContent == 0) {
        input.textContent = "";
    }
    input.textContent = "0." + input.textContent
}

function x1() {
    input.textContent = 1/(eval(input.textContent))
}

function f(name) {
    if(name == 'sin'){
        input.textContent = Math.sin(eval(input.textContent)).toFixed(8)
    }
    if(name == 'asin'){
        input.textContent = Math.asin(eval(input.textContent)).toFixed(8)
    }
    if(name == 'cos'){
        input.textContent = Math.cos(eval(input.textContent)).toFixed(8)
    }
    if(name == 'acos'){
        input.textContent = Math.acos(eval(input.textContent)).toFixed(8)
    }
    if(name == 'tg'){
        input.textContent = Math.tan(eval(input.textContent))
    }
    if(name == 'atg'){
        input.textContent = (1/Math.tan(eval(input.textContent)))
    }
}

function lg(){
    input.textContent = Math.log10(eval(input.textContent));
}

function ln(){
    input.textContent = Math.log(eval(input.textContent));
}
