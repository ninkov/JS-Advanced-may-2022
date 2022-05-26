function townPopolation(input) {
  let towns = {};

  for (const line of input) {
    let [town, population] = line.split(" <-> ");
    population = Number(population);
    if (!towns[town]) {
      towns[town] = 0;
    }
    towns[town] += population;
  }
  for (const line in towns) {
    console.log(`${line} : ${towns[line]}`);
  }
}
townPopolation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
