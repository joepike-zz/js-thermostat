const CAPACITY = 10

function Airport(capacity = CAPACITY) {
  console.log(weather);
  this.planes = [];
  this.capacity = capacity;
  // this.weather = new weather;
}

Airport.prototype.land = function(plane) {
  // console.log('in land plane');
  if(this.isFull() === true) { throw new Error("Airport at capacity. Unable to land") };
  // console.log(function() { throw new Error("Airport at capacity. Unable to land") });
  this.planes.push(plane);
}

Airport.prototype.takeOffPlane = function(plane, weather) {
  if(this.weather.isStormy() === true ) { throw new Error("Plane unable to take off in stormy weather!")}
  index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
}

Airport.prototype.isFull = function() {
  // console.log(this.planes.length);
  if (this.planes.length === this.capacity) {return true }
  else { return false };
}

// Airport.prototype.setCapacity = function(capacity)
