var Gigasecond = function (date) {
  this.inputDate = date;
};

Gigasecond.prototype.date = function () {
  dateSecondsNumber = this.inputDate.getTime() / 1000;
  var gigasecond = Math.pow(10,9);
  var gigasecondAnniversary = new Date((dateSecondsNumber + gigasecond)*1000);
  return gigasecondAnniversary;
}

module.exports = Gigasecond;
