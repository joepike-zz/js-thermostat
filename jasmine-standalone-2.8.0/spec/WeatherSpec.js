
describe("Weather", function() {

  math = function() {};
  math.floor = function() { return 9 };
  math.random = function() { };

  beforeEach(function() {
    // console.log(math.floor(7))
    weather = new Weather(math);
    math = jasmine.createSpyObj('math', ['floor', 'takeOff']);
  })

  it("should return true if weather is stormy", function() {
    expect(weather.isStormy()).toEqual(true);
  })

})
