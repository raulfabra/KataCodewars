function sortMyString_1(S) {
  let strEven = "";
  let strOdd = "";
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      strEven += S[i];
    } else {
      strOdd += S[i];
    }
  }
  return strEven + " " + strOdd;
}

//BEST PRACTICE 👇
const sortMyString_2 = (S) => {
  let even = S.split("")
    .filter((v, i) => i % 2 === 0)
    .join("");
  let odd = S.split("")
    .filter((v, i) => i % 2 !== 0)
    .join("");
  return even + " " + odd;
};

//Learn Split and Join 👇👇
function learnSplitAndJoin() {
  let cadenaDeTexto = "METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL".split("");
  console.log(cadenaDeTexto); // Un array de letras
  cadenaDeTexto.filter((v, i) => i % 2 === 0); // El array de letras filtrado por los que estan en una posición par ( [0], [2], [3])
}

learnSplitAndJoin();
