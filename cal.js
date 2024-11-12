var op;
var numeros;
var num1;

function fun(){
    var res;
    num1 = Number.parseInt;
    numeros = Number.parseInt;
    switch (op){
        case "+":
            res=num1+numeros;
            break;
        case "-":
            res=num1-numeros;
              break;
         case "*":
            res=num1*numeros;
           break;
        case "/":
             res=num1/numeros;
             break;
}
document.getElementById(result).innerHTML = res;
}
function clear(){
    num1 = numeros;
    numeros='';
}