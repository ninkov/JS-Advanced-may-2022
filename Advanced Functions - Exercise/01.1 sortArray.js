function sortArray(arr, str) {
    const methods = {
      asc: (a, b) => a - b,
      desc: (a, b) => b - a
    };
    arr.sort(methods[str]);
  return arr;
}
sortArray([14, 7, 17, 6, 8], "asc");
sortArray([14, 7, 17, 6, 8], "desc");
