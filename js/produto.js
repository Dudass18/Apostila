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

/* var s1 =  */