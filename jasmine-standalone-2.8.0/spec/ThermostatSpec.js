
describe("Thermostat", function() {
  beforeEach(function() {
    thermostat = new Thermostat()
  });
  it("should start with a temperature of 20°C", function() {
    expect(thermostat.temp).toEqual(20);
  })
  it("should display the temperature", function() {
    expect(thermostat.displayTemp()).toEqual("current temperature is 20°C");
  })
  it("should increase the temperature", function() {
    expect(thermostat.temp).toEqual(20);
    thermostat.up(5);
    expect(thermostat.displayTemp()).toEqual("current temperature is 25°C");
  })
  it("should decrease the temperature", function() {
    expect(thermostat.temp).toEqual(20);
    thermostat.down(5);
    expect(thermostat.displayTemp()).toEqual("current temperature is 15°C");
  })
  it("should raise an error if attempting to go below 10°C", function() {
    expect(thermostat.temp).toEqual(20);
    expect(function() { thermostat.down(15) }).toThrowError("unable to go below 10°C");
  })
  it("should default power saving mode on", function() {
    expect(thermostat.psm).toEqual(true);
  })
  it("should not allow above 25°C if power saving mode is on", function() {
    expect(function() { thermostat.up(6) }).toThrowError("unable to go above 25°C when power saving mode on");
  })
  it("should not allow above 32°C if power saving mode is off", function() {
    thermostat.psm = false;
    expect(function() { thermostat.up(13) }).toThrowError("unable to go above 32°C when power saving mode off");
  })
  it("should reset temperature to 20°C", function() {
    thermostat.up(1)
    thermostat.reset();
    expect(thermostat.displayTemp()).toEqual("current temperature is 20°C");
  })
  it("should return the energy usage", function() {
    expect(thermostat.getEnergyUsage()).toEqual("medium-usage");
  })
  it("should return a high energy usage", function() {
    thermostat.psm = false;
    thermostat.up(6);
    expect(thermostat.getEnergyUsage()).toEqual("high-usage");
  })
  it("should return a low energy usage", function() {
    thermostat.down(5);
    expect(thermostat.getEnergyUsage()).toEqual("low-usage");
  })
  it("should switch the enrgy saving mode", function() {
    thermostat.psmSwitch();
    expect(thermostat.psm).toEqual(false);
    thermostat.psmSwitch();
    expect(thermostat.psm).toEqual(true);
  })
  it("should display the energy mode", function() {
    expect(thermostat.displayPSM()).toEqual("ON");
  })
  it("should not be able to switch power save mode if temperature above standard allowance", function() {
    thermostat.psmSwitch();
    thermostat.up(10)
    expect(function() { thermostat.psmSwitch() }).toThrowError("Temperature too high to switch to power save mode");
  })
})
