var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valorTamanho]')





function mostraTamanho(){
    outputTamanho.value = inputTamanho.value
}
inputTamanho.oninput = mostraTamanho

var empresa = "Caelum";
empresa
console.log(empresa.length)


console.log(

    empresa.replace("Cae","Tano")
    )

console.log(empresa)








var textoInteiro = "10";
var inteiro = parseInt(textoInteiro);

var textoFloat = "10.22";
var float = parseFloat(textoFloat);
console.log(
textoInteiro,textoFloat,inteiro,float
)

var milNumber = 1000;
var milString =  milNumber.toFixed(2);
console.log(milString);


var s1 = "Caelum";
var s2 = "Inovação";
console.log(s1+s2); // imprime Caelum Inovação



var num1 = 2;
var num2 = 3;
var nome = "Caelum";

console.log(num1 + nome + num2);
console.log(num1 + num2 + nome);
console.log(nome + num1 + num2);
console.log(nome + (num1 + num2));
console.log(nome + num1 * num2);


console.log(10-"curso");

var resultado = 10-"curso"; // retorna NaN
resultado == NaN; // false
NaN == NaN; // true

var resultado = 10-"curso";
isNaN(resultado); // true