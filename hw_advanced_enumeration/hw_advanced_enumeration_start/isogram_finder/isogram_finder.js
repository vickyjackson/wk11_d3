const IsogramFinder = function (word) {
  this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
  let result = [];
  const baseArray = this.word.toLowerCase().split('');
  const newArray = baseArray.slice()
  newArray.forEach(letter => {
    if (!result.includes(letter)){
      result.push(letter);
    }
  })
  console.log(newArray);
  console.log(result);
  if (newArray.sort().toString() !== result.sort().toString()){
    return false;
  }
  return true;
}

module.exports = IsogramFinder;
