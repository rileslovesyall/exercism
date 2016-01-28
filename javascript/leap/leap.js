var Year = function (input) {
  this.year = input;
};

Year.prototype.isLeap = function () {
  var leap = false;
  if (this.year % 4 === 0) {
    leap = true;
    if (this.year % 100 === 0 && this.year % 400 !== 0){
      leap = false;
    }
  }
  return leap;
};

module.exports = Year;