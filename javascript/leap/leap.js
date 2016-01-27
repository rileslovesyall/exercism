var Year = function (input) {
  year = input;
};

Year.prototype.isLeap = function () {
  var leap = false;
  if (year % 4 === 0) {
    leap = true;
    if (year % 100 === 0 && year % 400 !== 0){
      leap = false;
    }
  }
  return leap
};

module.exports = Year;