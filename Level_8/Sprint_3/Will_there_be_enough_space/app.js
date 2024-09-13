function enough(cap, on, wait) {
  // your code here
  if (cap === on) return wait;
  else if (cap > on && on + wait <= cap) return 0;
  else if (cap > on && on + wait > cap) return on + wait - cap;
  else if (cap < on) return on - cap;
}
