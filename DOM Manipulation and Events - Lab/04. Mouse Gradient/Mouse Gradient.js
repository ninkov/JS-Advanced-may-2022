function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  gradient.addEventListener("mousemove", onMouseMove);
  
  const result = document.getElementById("result");
  function onMouseMove(event) {
    // console.log(event);
    result.textContent =
      Math.floor(event.offsetX / gradient.clientWidth * 100) + "%";
  }
}
