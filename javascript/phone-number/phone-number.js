var PhoneNumber = function (input) {
  this.origNumber = input;
};

PhoneNumber.prototype.number = function () {
  var cleanNumber = this.origNumber.replace(/[^0-9]/g, "");
  if (cleanNumber.length !== 10) {
    if (cleanNumber[0] === '1' && cleanNumber.length === 11) {
      cleanNumber = cleanNumber.slice(1, 11);
    }
    else {
      cleanNumber = '0000000000';
    }
  }
  return cleanNumber;
};

PhoneNumber.prototype.areaCode = function () {
  var phoneNumber = this.number();
  return phoneNumber.slice(0, 3);
};

PhoneNumber.prototype.toString = function () {
  var areaCode = this.areaCode();
  var firstThree = this.number().slice(3, 5);
  var lastFour = this.number().slice(6,10);
  var stringNumber = '(' areaCode + ')' + ' ' + firstThree + '-' +lastFour;
  return stringNumber;
};


module.exports = PhoneNumber;