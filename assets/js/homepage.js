//showing dates of forecast
$(document).ready(function () {
  var currentDate = document.querySelector("#currentDay");
  var showDate = dayjs().format("MMMM D");

  currentDate.textContent = showDate;
});

$(document).ready(function () {
  var currentDate = document.querySelector("#day1");
  var day1 = dayjs().add(1, "day").format("MMMM D");

  currentDate.textContent = day1;
});

$(document).ready(function () {
  var currentDate = document.querySelector("#day2");
  var day2 = dayjs().add(2, "day").format("MMMM D");

  currentDate.textContent = day2;
});

$(document).ready(function () {
  var currentDate = document.querySelector("#day3");
  var day3 = dayjs().add(3, "day").format("MMMM D");

  currentDate.textContent = day3;
});

$(document).ready(function () {
  var currentDate = document.querySelector("#day4");
  var day4 = dayjs().add(4, "day").format("MMMM D");

  currentDate.textContent = day4;
});

$(document).ready(function () {
  var currentDate = document.querySelector("#day5");
  var day5 = dayjs().add(5, "day").format("MMMM D");

  currentDate.textContent = day5;
});
