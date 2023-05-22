//jshint esversion:6

exports.getDate = function() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  return today.toLocaleString("en-us", options);
};

exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-us", options);
};
