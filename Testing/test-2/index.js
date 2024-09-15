const numeroDeCaracteres = (str, char) => {
  if (typeof str !== "string" || typeof char !== "string") return "Error type of parameters";
  // El string solo puede ser alfabeético
  if (!/^[a-zA-Z\s]+$/.test(str)) return false;
  if (!/^[a-zA-Z]+$/.test(char)) return false;

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
};

module.exports = { numeroDeCaracteres };
