const lightsOn = function(lights) {
  lights.map(l => !l.on ? l.on = true : null);
  return lights;
};

const lightsOff = function(lights) {
  lights.map(l => l.on ? l.on = false : null);
  return lights;
};

const toggleLights = function(lights, lightsAreOn) {
  lightsAreOn ? lightsOff(lights) : lightsOn(lights);
  return lights;
};
