const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let result = [];
  const arrayToCheck = this.phrase.toLowerCase().split('');
  arrayToCheck.forEach(letter => {
    if ((!result.includes(letter)) && (this.alphabet.includes(letter))){
      result.push(letter);
    }
  })
  if (this.alphabet.sort().toString() !== result.sort().toString()){
    return false;
  }
  return true;
}

module.exports = PangramFinder;
