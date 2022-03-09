function ConverterDolar(){
    let valor = document.getElementById("valorEmDolar")
    let valor1 = valor.value
    let valor2 = parseFloat(valor1)
    let valor3 = document.getElementById("valorConvertido")
    let valor4 = valor1*5
    valor3.innerHTML = "O resultado da conversão de dólar para reais é "+valor4
    
  }
  function ConverterEuro(){
    let valor = document.getElementById("valorEmEuro")
    let valor1 = valor.value
    let valor2 = Number(valor1)
    let valor3 = document.getElementById("valorConvertido1")
    let valor4 = valor2*5.5
    valor3.innerHTML = "O resultado da conversão de euro para reais é "+valor4
  }