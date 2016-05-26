var DnaTranscriber = function () {
  this.dnaRnaPairing = { 'G': 'C',
                         'C': 'G',
                         'T': 'A',
                         'A': 'U'
                        };
};

DnaTranscriber.prototype.toRna = function (dnaStrandString) {
  var dnaStrandArray = dnaStrandString.split("")
  var rnaStrandArray = dnaStrandArray.map(function(dna){
    return rna = this.dnaRnaPairing[dna]
  }, this)
  var rnaStrandString = rnaStrandArray.join("");
  return rnaStrandString;
};

module.exports = DnaTranscriber;
