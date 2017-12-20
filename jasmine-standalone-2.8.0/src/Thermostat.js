
function Thermostat() {
  this.temp = 20;
  this.psm = true;
}

Thermostat.prototype.displayTemp = function() {
  return "current temperature is " + this.temp + "°C";
}

Thermostat.prototype.up = function(num) {
  if((this.psm === true) && ((this.temp + num) > 25)) { throw new Error("unable to go above 25°C when power saving mode on")}
  if((this.psm === false) && ((this.temp + num) > 32)) { throw new Error("unable to go above 32°C when power saving mode off")}
  this.temp += num;
}

Thermostat.prototype.down = function(num) {
  if((this.temp - num) < 10) { throw new Error("unable to go below 10°C")}
  this.temp -= num;
}

Thermostat.prototype.reset = function() {
  this.temp = 20;
}

Thermostat.prototype.getEnergyUsage = function() {
  switch (true) {
    case (this.temp > 25):
      return "high-usage"
      break;
    case (this.temp < 18):
      return "low-usage"
      break;
    default:
    return "medium-usage"
  }
}

Thermostat.prototype.color = function() {
  switch (true) {
    case (this.temp > 25):
      return "red"
      break;
    case (this.temp < 18):
      return "green"
      break;
    default:
    return "black"
  }
}

Thermostat.prototype.psmSwitch = function() {
  if(this.psm) {
    this.psm = false;
  }
  else {
    if(this.temp < 26) {this.psm = true;
    } else {
      throw new Error("Temperature too high to switch to power save mode")
    }
  }
}

Thermostat.prototype.displayPSM = function() {
  if(this.psm) {
    return "ON";
  }
  else {
    return "OFF";
  }
}
