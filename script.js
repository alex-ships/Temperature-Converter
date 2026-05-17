let inputData = document.getElementById("inputValue");
let fromUnit = document.getElementById("from");
let toUnit = document.getElementById("to");
let output = document.getElementById("output");
let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
     if(inputData.value === '' || isNaN(inputData.value)){
        output.value = 'Enter a valid number'
        return
    }
    if(fromUnit.value === 'Fahrenheit' && toUnit.value === 'Celsius'){
        output.value = ((parseFloat(inputData.value) - 32) * 5/9).toFixed(2) + ' ' + toUnit.value.slice(0, 1)
    }else if(fromUnit.value === 'Fahrenheit' && toUnit.value === 'Kelvin'){
        output.value = ((parseFloat(inputData.value) - 32) * 5/9 + 273).toFixed(2) + ' ' + toUnit.value.slice(0, 1)
    }else if(fromUnit.value === 'Celsius' && toUnit.value === 'Kelvin'){
        output.value = (parseFloat(inputData.value) + 273).toFixed(2) + ' ' + toUnit.value.slice(0, 1)
    }else if(fromUnit.value === 'Celsius' && toUnit.value === 'Fahrenheit'){
        output.value = ((parseFloat(inputData.value) * 9/5) + 32).toFixed(2) + ' ' + toUnit.value.slice(0, 1)
    }else if(fromUnit.value === 'Kelvin' && toUnit.value === 'Celsius'){
        output.value = (parseFloat(inputData.value) - 273).toFixed(2) + ' ' + toUnit.value.slice(0, 1)
    }else if(fromUnit.value === 'Kelvin' && toUnit.value === 'Fahrenheit'){
        output.value = ((parseFloat(inputData.value) - 273) * 9/5 + 32).toFixed(2) + ' ' + toUnit.value.slice(0, 1)
    }

    else{output.value = inputData.value + ' ' + toUnit.value.slice(0, 1)}

})