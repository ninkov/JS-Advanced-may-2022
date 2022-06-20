function attachEventsListeners() {
  let buttonConvert = document.getElementById("convert");
  buttonConvert.addEventListener("click", onClick);

  let metricUnits = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };

  function onClick(event) {
   const fromValue = document.getElementById("inputUnits").value;
    // console.log(document.getElementById("inputUnits"));
    const toValue = document.getElementById("outputUnits").value;
    // console.log(document.getElementById("outputUnits"));

    const inputDistance = Number(
      document.getElementById("inputDistance").value
    );

    const outputDistanceEl = document.getElementById("outputDistance");
    // console.log(document.getElementById("outputDistance").value);
    const valueInMeters = inputDistance * metricUnits[fromValue];
    const convertedValue = valueInMeters / metricUnits[toValue];
    outputDistanceEl.value = convertedValue;
  }
}
