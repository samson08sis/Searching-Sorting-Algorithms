function search(array, target) {
  let l = 0;
  let r = array.length;

  while (l <= r) {
    let m = Math.round((l + r) / 2);

    if (array[m] === target) return m;
    else if (target < array[m]) r = m - 1;
    else if (target > array[m]) l = m + 1;
  }

  return -1;
}
