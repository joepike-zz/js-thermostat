
function Weather(math = Math) {
  this.math = math;
}

Weather.prototype.isStormy = function() {
  // x = (this.math.floor(this.math.random() * 10) + 1 )
  // console.log(x);
  if( (this.math.floor(this.math.random() * 10) + 1 ) === 10) {
    return true }
    else {
    return false };
}
