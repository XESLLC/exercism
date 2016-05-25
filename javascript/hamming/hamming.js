var Hamming = function () {};

Hamming.prototype.compute = function(strand1, strand2) {
  if (strand1.length !== strand2.length) throw new Error("DNA strands must be of equal length.");
  var strand1Array = strand1.split("");
  var strand2Array = strand2.split("");

  return strand1Array.reduce(function (prevValue, currentStrand1Value, currentIndex) {
    return currentStrand1Value === strand2Array[currentIndex] ? prevValue : prevValue + 1
  }, 0);
};
module.exports = Hamming;
