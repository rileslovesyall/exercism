var Hamming = function () {};

Hamming.prototype.compute = function(first, second) {
  if (first.length !== second.length) {
    throw 'DNA strands must be of equal length.';
  }
  var hamming_distance = 0;
  for( i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      hamming_distance++;
    }
  }
  return hamming_distance;
};

module.exports = Hamming;