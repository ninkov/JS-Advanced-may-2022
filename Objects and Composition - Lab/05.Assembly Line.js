function createAssemblyLine() {
  return {
    hasClima: (myCar) => {
      myCar.temp = 21;
      myCar.tempSettings = 21;
      myCar.adjustTemp = () => {
        if (myCar.temp < myCar.tempSettings) {
          myCar.temp += 1;
        } else if (myCar.temp > myCar.tempSettings) {
          myCar.temp -= 1;
        }
      };
    },
    hasAudio: (myCar) => {
      myCar.currentTrack = { name: "", artist: "" };
      myCar.nowPlaying = () => {
        if (myCar.currentTrack !== null) {
          console.log(
            `Now playing '${myCar.currentTrack.name}' by ${myCar.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic: (myCar) => {
      myCar.checkDistance = (distance) => {
        if (myCar.distance < 0.1) {
          console.log(`Beep! Beep! Beep!`);
        } else if (myCar.distance >= 0.1 || myCar.distance < 0.25) {
          console.log(`Beep! Beep!`);
        }else if (myCar.distance >= 0.25 || myCar.distance < 0.5) {
          console.log(`Beep!`);
        }else{
          console.log('');
        }
      };
    },
  };
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

console.log("---------------------------");

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();

console.log("---------------------------");

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
