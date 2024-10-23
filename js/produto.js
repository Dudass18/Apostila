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