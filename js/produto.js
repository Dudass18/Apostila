var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valorTamanho]')





function mostraTamanho(){
    outputTamanho.value = inputTamanho.value
}
inputTamanho.oninput = mostraTamanho

var empresa = "Caelum";
console.log(empresa.length)


empresa.replace("lum","tano"); // retorna Caetano