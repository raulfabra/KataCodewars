function canIPlay(now, start, end) {
  for (let i = start; i != end; i = (i + 1) % 24) if (i === now) return true;
  return false;
}
