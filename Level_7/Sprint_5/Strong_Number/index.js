function strong(n) {
  // Convertimos el número a una cadena, luego a un array de dígitos
  let digits = n.toString().split("");
  let result = 0;

  // Función para calcular el factorial de un número
  function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }
    return fact;
  }

  // Iteramos sobre cada dígito, calculando su factorial y sumándolo
  for (let digit of digits) {
    result += factorial(Number(digit));
  }

  // Comparamos la suma de factoriales con el número original
  return result === n ? "STRONG!!!!" : "Not Strong !!";
}

// Ejemplo de uso
console.log(strong(145)); // STRONG!!!! (145 es fuerte porque 1! + 4! + 5! = 145)
console.log(strong(123)); // Not Strong !!
