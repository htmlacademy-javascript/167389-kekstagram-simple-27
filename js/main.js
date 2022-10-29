function randomNumber(min, max) {
  if (min < 0 || max < 0 ) {
    return NaN;
  }
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
}

function stringLength(string, length) {
  return string.length <= length;
}
randomNumber(1,7);
stringLength('', 110);
