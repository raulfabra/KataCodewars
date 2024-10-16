function strong(n) {
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

  for (let digit of digits) {
    result += factorial(Number(digit));
  }

  return result === n ? "STRONG!!!!" : "Not Strong !!";
}
