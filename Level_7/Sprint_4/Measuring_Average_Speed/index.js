function calculateSpeed(distance, time) {
  let d = 0;
  let t = 0;
  if (distance.slice(-2) === "km") d = distance.slice(0, -2) * 1000;
  else d = distance.slice(0, -1) * 1;
  if (time.slice(-3) === "min") t = time.slice(0, -3) * 60;
  else t = time.slice(0, -1) * 1;
  return ((d / t) * 2.23694).toFixed(0) + "mph";
}
