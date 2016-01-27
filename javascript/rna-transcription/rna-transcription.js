var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function (string) {
  var rna = "";
  for( i = 0; i < string.length; i++) {
    if (string[i] === 'G') {
      rna += 'C';
    } else if (string[i] === 'C') {
      rna += 'G';
    } else if (string[i] === 'T') {
      rna += 'A';
    } else if (string[i] === 'A') {
      rna += 'U';
    }
  }
  return rna;
};

module.exports = DnaTranscriber;