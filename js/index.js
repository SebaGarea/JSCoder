
function convertirCelsiusAFarenheit(numeroIngresado) {
return(numeroIngresado * 9/5)+32;
}

function inicioConvertidor() {
    let celsius = prompt('Ingrese una temperatura en grado CELSIUS')

    if (celsius !==null && !isNaN(celsius)) {
        celsius = parseFloat(celsius)
    
    let fahrenheit = convertirCelsiusAFarenheit(celsius);

    alert(`${celsius} grados Celsius son ${fahrenheit} grados Farenheit`);
}else{
    alert('Por favor, ingresa un valor numerico correcto')
}
}
window.onload = inicioConvertidor;

