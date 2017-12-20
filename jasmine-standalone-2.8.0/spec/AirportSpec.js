
describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    airport = new Airport();
  })

  it("lands a plane and plane is within airport", function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  })

  it("should take off a plane and no longer be in airport", function() {
    airport.land(plane);
    airport.takeOffPlane(plane);
    expect(airport.planes).not.toContain(plane);
  })

  it("should not allow a plane to be landed when the airport is at capacity", function() {
    for(i = 0; i < 10; i++) {
      airport.land(plane);
    }
    expect(function() { airport.land(plane) }).toThrowError("Airport at capacity. Unable to land");
  })

  it("should allow to define a default capacity that can be overriden", function() {
    airport = new Airport(20);
    for(i = 0; i < 20; i++) {
      airport.land(plane);
    }
    expect(function() { airport.land(plane) }).toThrowError("Airport at capacity. Unable to land");
  })

})

describe("Airport weather", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    airport = new Airport();
    // spyOn(airport, 'isStormy').and.returnValue(true);
  })

  function mockWeather() {
    return {
      isStormy: () => assert(true);
    }
  }

  it("should not allow a plane to take off in stormy weather", function() {
    expect(airport.takeOffPlane(plane, mockWeather).toThrowError("Plane unable to take off in stormy weather!")
  })

})
