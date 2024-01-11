function convertTemperature() {
  // Obtener el valor ingresado por el usuario
  let celsius = document.getElementById("celsiusInput").value;

  // Verificar si el valor ingresado es un número válido
  let temperature = parseFloat(celsius);
  
  if (isNaN(temperature)) {
    // Mostrar un mensaje de error si el valor no es válido
    alert("Valor inválido. Por favor, ingrese un número válido.");
    return;
  }

  // Realizar las conversiones de temperatura
  let fahrenheit = (temperature * 9/5) + 32;
  let kelvin = temperature + 273.15;

  // Mostrar los resultados en el DOM
  document.getElementById("kelvin").textContent = "Grados Kelvin: " + kelvin;
  document.getElementById("fahrenheit").textContent = "Grados Fahrenheit: " + fahrenheit;
}
