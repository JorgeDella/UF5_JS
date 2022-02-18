document.addEventListener("keydown", calculadora);
function calculadora(tecla) {
    if (tecla.keyCode == 48) {
        document.calculadora.ans.value+='0'
    }
    else if (tecla.keyCode == 49) {
        document.calculadora.ans.value+='1'
    }
    else if (tecla.keyCode == 50) {
        document.calculadora.ans.value+='2'
    }
    else if (tecla.keyCode == 51) {
        document.calculadora.ans.value+='3'
    }
    else if (tecla.keyCode == 52) {
        document.calculadora.ans.value+='4'
    }
    else if (tecla.keyCode == 53) {
        document.calculadora.ans.value+='5'
    }
    else if (tecla.keyCode == 54) {
        document.calculadora.ans.value+='6'
    }
    else if (tecla.keyCode == 55) {
        document.calculadora.ans.value+='7'
    }
    else if (tecla.keyCode == 56) {
        document.calculadora.ans.value+='8'
    }
    else if (tecla.keyCode == 57) {
        document.calculadora.ans.value+='9'
    }
    else if (tecla.keyCode == 187 || tecla.keyCode == 171) {
        document.calculadora.ans.value+='+'
    }
    else if (tecla.keyCode == 189 || tecla.keyCode == 173) {
        document.calculadora.ans.value+='-'
    }
    else if (tecla.keyCode == 88) {
        document.calculadora.ans.value+='*'
    }
    else if (tecla.keyCode == 219 || tecla.keyCode == 90) {
        document.calculadora.ans.value+='/'
    }
    else if (tecla.keyCode == 13) {
        document.calculadora.ans.value=eval(document.calculadora.ans.value)
    }
    else if (tecla.keyCode == 67) {
        document.calculadora.ans.value=''
    }
}
function calc(x) {
    if (x.value==0) {
        document.calculadora.ans.value+='0'
    }
    else if (x.value==1) {
        document.calculadora.ans.value+='1'
    }
    else if (x.value==2) {
        document.calculadora.ans.value+='2'
    }
    else if (x.value==3) {
        document.calculadora.ans.value+='3'
    }
    else if (x.value==4) {
        document.calculadora.ans.value+='4'
    }
    else if (x.value==5) {
        document.calculadora.ans.value+='5'
    }
    else if (x.value==6) {
        document.calculadora.ans.value+='6'
    }
    else if (x.value==7) {
        document.calculadora.ans.value+='7'
    }
    else if (x.value==8) {
        document.calculadora.ans.value+='8'
    }
    else if (x.value==9) {
        document.calculadora.ans.value+='9'
    }
    else if (x.value=="+") {
        document.calculadora.ans.value+='+'
    }
    else if (x.value=="-") {
        document.calculadora.ans.value+='-'
    }
    else if (x.value=="*") {
        document.calculadora.ans.value+='*'
    }
    else if (x.value=="/") {
        document.calculadora.ans.value+='/'
    }
    else if (x.value==".") {
        document.calculadora.ans.value+='.'
    }
    else if (x.value=="=") {
        document.calculadora.ans.value=eval(document.calculadora.ans.value)
    }
    else if (x.value=="AC") {
        document.calculadora.ans.value=''
    }
}