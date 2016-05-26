//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  input = input.replace(/\s/g, "");
  if (input === input.toUpperCase() && input.match(/[a-z]/i) ) {return "Whoa, chill out!"}
  if (input.slice(-1) === "?") {return "Sure."}
  if (!input.match(/[a-z]/i) && !input === "") {return "Whatever."}
  if (input === "") {return "Fine. Be that way!"}
  return "Whatever."
};

module.exports = Bob;
