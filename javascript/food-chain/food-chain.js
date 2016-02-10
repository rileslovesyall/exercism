FoodChain = function () {};

FoodChain.prototype.verses = function (verseNums) {
  var song = '';
  for (var i = 0; i < arguments.length; i++) {
    song += this.verse(arguments[i]) + '\n';
  }
  return song.replace(/\n$/, "");
};

FoodChain.prototype.verse = function (verseNum) {
  var song = "";
  if (verseNum === 1) {
    song += 'I know an old lady who swallowed a fly.\n';
  } else if (verseNum === 2) {
    song += 'I know an old lady who swallowed a spider.\nthat wriggled and jiggled and tickled inside her.\n';
  } else if (verseNum === 3) {
    song += 'I know an old lady who swallowed a bird.\n' +
      'How absurd to swallow a bird!\n';
  } else if (verseNum === 4) {
    song += 'I know an old lady who swallowed a cat.\n' +
      'Imagine that, to swallow a cat!\n';
  } else if (verseNum === 5) {
    song += 'I know an old lady who swallowed a dog.\n' +
      'What a hog, to swallow a dog!\n';
  } else if (verseNum === 6) {
    song += 'I know an old lady who swallowed a goat.\n' +
      'Just opened her throat and swallowed a goat!\n';
  } else if (verseNum === 7) {
    song += 'I know an old lady who swallowed a cow.\n' +
      'I don\'t know how she swallowed a cow!\n';
  } else if (verseNum === 8) {
    song += 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';
  }
  song += this.recurseVerse(verseNum);
  return song;
};

FoodChain.prototype.recurseVerse = function (verseCount) {
  var song = "";
  if (verseCount === 1) {
    song += 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
  } else if (verseCount === 2) {
    song += 'She swallowed the spider to catch the fly.\n';
    song += this.recurseVerse(verseCount-1);
  } else if (verseCount === 3) {
    song += 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n';
    song += this.recurseVerse(verseCount-1);
  } else if (verseCount === 4) {
    song += 'She swallowed the cat to catch the bird.\n';
    song += this.recurseVerse(verseCount-1);
  } else if (verseCount === 5) {
    song += 'She swallowed the dog to catch the cat.\n';
    song += this.recurseVerse(verseCount-1);
  } else if (verseCount === 6) {
    song += 'She swallowed the goat to catch the dog.\n';
    song += this.recurseVerse(verseCount-1);
  } else if (verseCount === 7) {
    song += 'She swallowed the cow to catch the goat.\n';
    song += this.recurseVerse(verseCount-1);
  }
  return song;
};

module.exports = FoodChain;