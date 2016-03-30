var Pangram = function () {};


Pangram.prototype.isPangram = function () {
  if (this.phrase.length < 26) {
    return false;
  } else {
    var phraseLetters === this.phrase.toLowerCase().match(/[a-z]/g);
    return new Set(phraseLetters).size === 26;
  }
};