var WordCount = function () {};

WordCount.prototype.count = function (phrase) {
  var wordCountObject = {};
  var phraseTrimmed = phrase.trim();
  var phraseNoNewline = phraseTrimmed.replace("\n", " ");
  var phraseNoTabs = phraseNoNewline.replace("\t", " ");
  var wordsArray = phraseNoTabs.split(" ");
  var wordsArrayNoEmptyString = wordsArray.filter(function (word) {return (word !== "")});
  wordsArrayNoEmptyString.forEach(function (word) {
    var wLowCase = word.toLowerCase();
    wordCountObject.hasOwnProperty(wLowCase)? ++ wordCountObject[wLowCase] : wordCountObject[wLowCase] = 1
  })
  return wordCountObject
};
module.exports = WordCount
