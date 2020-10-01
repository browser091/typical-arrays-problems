
exports.min = function min(array) {
  if (array != undefined && array != '') {
    return Math.min.apply(null, array)
  }
  return 0;
}


exports.max = function max(array) {
  if (array != undefined && array != '') {
    return Math.max.apply(null, array)
  }
  return 0;
}

exports.avg = function avg(array) {
  if (array != undefined && array != '') {
    let summ = 0
    for (let i = 0; i < array.length; i++) {
      summ += array[i]

    }
    return summ / array.length
  }
  return 0;
}