function solve(steps,meters,speed) {
    let distanceMeters = steps*meters
    let ms = speed/3.6
    let rest = Math.trunc (steps*meters/500)*60
    let time = distanceMeters/ms+rest
    let sec = Math.round (time%60)
    let hours   = Math.floor(time / 3600); // get hours
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (sec < 10) {seconds = "0"+seconds;}
    console.log(`${hours}:${minutes}:${sec}`)
}
solve(4000, 0.60, 5);  //output 00:32:48
