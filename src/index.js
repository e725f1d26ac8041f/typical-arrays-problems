
exports.min = function min (array = []) {
  if (array.length === 0) return 0;
  return Math.min.apply(null, array);
}

exports.max = function max (array = []) {
  if (array.length === 0) return 0;
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  return 0;
}
