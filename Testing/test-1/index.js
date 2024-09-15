const transcribir = (str) => {
  if (typeof str !== "string") return `Error because the argument its a ${typeof str}`;
  else if (str.length <= 0) return null;

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "G":
        newStr += "C";
        break;
      case "C":
        newStr += "G";
        break;
      case "T":
        newStr += "A";
        break;
      case "A":
        newStr += "U";
        break;
      default:
        return (newStr = "This String can not been Transcribe");
    }
  }

  return newStr;
};

module.exports = { transcribir };
