solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  // your code goes here
  const T = temp + 273.15;
  const R = 0.082;
  const Mtotal = givenMass1 / molarMass1 + givenMass2 / molarMass2;

  return (Mtotal * R * T) / volume;
};
