var BeerSong = function () {};

BeerSong.prototype.verse = function (verseNum) {
  if (verseNum > 1) {
    return String(verseNum) + ' bottles of beer on the wall, '+ String(verseNum) +' bottles of beer.\nTake one down and pass it around, '+ String(verseNum-1) +' bottles of beer on the wall.\n';
  } else if (verseNum === 1) {
    return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  } else if (verseNum === 0) {
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  }
};

BeerSong.prototype.sing = function(beerCount) {
  var song = '';
  while (beerCount > 0) {
    song += BeerSong.prototype.verse(beerCount) + '\n';
    beerCount--;
  }
  song += BeerSong.prototype.verse(beerCount);
  return song;
};



module.exports = BeerSong;