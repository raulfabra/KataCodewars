function mutateMyStrings(One, Two) {
  const s1 = One.split("");
  const s2 = Two.split("");
  const mutated = [s1.join("")];

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      s1[i] = s2[i];
      mutated.push(s1.join(""));
    }
  }
  return mutated.join("\n") + "\n";
}
