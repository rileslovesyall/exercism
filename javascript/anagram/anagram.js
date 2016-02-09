var Anagram = function (input) {
  this.word = input;
};

Anagram.prototype.matches = function (arrayOrStrings) {
  var matchArray = [];
  if (arguments[0].constructor === Array) {
    matchArray = arguments[0];
  } else {
    for (var a = 0; a < arguments.length; a++) {
      matchArray.push(arguments[a]);
    }
  }
  var matches = [];
  var origWord = this.word.toLowerCase();
  for (i=0; i < matchArray.length; i++) {
    var matchWordArr = origWord.split("");
    if (origWord.length === matchArray[i].length && origWord !== matchArray[i].toLowerCase()) {
      for(j=0; j < matchArray[i].length; j++) {
        if (matchWordArr.indexOf(matchArray[i][j].toLowerCase()) !== -1) {
          var index = matchWordArr.indexOf(matchArray[i][j].toLowerCase());
          matchWordArr.splice(index, 1);
        }
      }
      if (matchWordArr.length === 0) {
        matches.push(matchArray[i]);
      }
    }
  }
  return matches;
};

module.exports = Anagram;