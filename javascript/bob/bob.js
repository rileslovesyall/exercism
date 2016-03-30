var Bob = function() {};

var lettersOnly = function (input) {
  var letterString = input.replace(/[0-9]/g, "");
  return letterString;
};

Bob.prototype.hey = function(input) {
  if (lettersOnly(input) === input.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (input[input.length-1] === "?") {
    return 'Sure.';
  }
  else if (input) {
    return "Whatever.";
  }
};

module.exports = Bob;
