function noBoringZeros(n) {
  if (n === 0) return 0;

  let newNum = n;
  for (let i = 0; i <= n.toString().length; i++) {
    let str = newNum.toString();
    let long = newNum.toString().length;
    if (str.charAt(long - 1) === "0") newNum = parseInt(str.slice(0, str.length - 1));
    else return newNum;
  }

  return newNum;
}
