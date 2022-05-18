function solve(speed, road) {
  let difference = 0;
  let speedLimit = 0;
  let status = "";

  if (road === "motorway") {
    if (speed <= 130) {
      overOrLower130(speed);
    } else if (speed > 130) {
      overOrLower130(speed);
    }
  } else if (road === "interstate") {
    if (speed <= 90) {
      overOrLower90(speed);
    } else if (speed > 90) {
      overOrLower90(speed);
    }
  } else if (road === "city") {
    if (speed <= 50) {
      overOrLower50(speed);
    } else if (speed > 50) {
      overOrLower50(speed);
    }
  } else if (road === "residential") {
    if (speed <= 20) {
      overOrLower20(speed);
    } else if (speed > 20) {
      overOrLower20(speed);
    }
  }
  function overOrLower130(speed) {
    speedLimit = 130;
    if (speed > 130) {
      if (speed > 130 && speed <= 150) {
        difference = speed - speedLimit;
        status = "speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 150 && speed <= 170) {
        difference = speed - speedLimit;
        status = "excessive speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 170) {
        difference = speed - speedLimit;
        status = "reckless driving";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  }
  function overOrLower90(speed) {
    speedLimit = 90;
    if (speed > 90) {
      if (speed > 90 && speed <= 110) {
        difference = speed - speedLimit;
        status = "speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 110 && speed <= 130) {
        difference = speed - speedLimit;
        status = "excessive speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 130) {
        difference = speed - speedLimit;
        status = "reckless driving";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  }
  function overOrLower50(speed) {
    speedLimit = 50;
    if (speed > 50) {
      if (speed > 50 && speed <= 70) {
        difference = speed - speedLimit;
        status = "speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 70 && speed <= 90) {
        difference = speed - speedLimit;
        status = "excessive speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 90) {
        difference = speed - speedLimit;
        status = "reckless driving";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  }
  function overOrLower20(speed) {
    speedLimit = 20;
    if (speed > 20) {
      if (speed > 20 && speed <= 40) {
        difference = speed - speedLimit;
        status = "speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 40 && speed <= 60) {
        difference = speed - speedLimit;
        status = "excessive speeding";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
      if (speed > 60) {
        difference = speed - speedLimit;
        status = "reckless driving";
        console.log(
          `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`
        );
      }
    } else {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
  }
}
