
exports.min = function min (arr) {
  if (arr && arr.length) {
    return arr.reduce((res, item) => item < res ? item : res, arr[0]);
  }
  return 0;
}

exports.max = function max (arr) {
  if (arr) {
    return arr.reduce((res, item) => item > res ? item : res, 0);
  }
  return 0;
}

exports.avg = function avg (arr) {
  if (arr && arr.length) {
    return arr.reduce((res, item) => res + item, 0) / arr.length;
  }
  return 0;
}
