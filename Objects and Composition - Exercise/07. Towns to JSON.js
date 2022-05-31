function townsToJSON(arr) {
  let result = [];
  // let firstRow = input.shift();
  class Town {
    constructor(town, latitude, longitude) {
      this.Town = town;
      this.Latitude = Number(latitude);
      this.longitude = Number(longitude);
    }
  }
  for (let index = 1; index < arr.length; index++) {
    const array = arr[index]
      .split("|")
      .map((t) => t.trim())
      .filter((x) => x.length != 0);
    // console.log(array);
    const townName = array[0];
    const lattitude =Number(array[1]).toFixed(2);
    const longitude = Number(array[2]).toFixed(2);
    const town = new Town(townName,lattitude,longitude);
    result.push(town);
  }
  return  JSON.stringify(result)
}
townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
