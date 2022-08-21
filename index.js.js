// ! Variables
var ratingOneInput = document.getElementById("one-input");
var ratingTwoInput = document.getElementById("two-input");
var ratingThreeInput = document.getElementById("three-input");
var ratingFourInput = document.getElementById("four-input");
var ratingFiveInput = document.getElementById("five-input");

var currentRatingValue = 0;

function submitted () {
    if (ratingOneInput.checked == true) {
        currentRatingValue = 1;
    } else if (ratingTwoInput.checked == true) {
        currentRatingValue = 2;
    } else if (ratingThreeInput.checked == true) {
        currentRatingValue = 3;
    } else if (ratingFourInput.checked == true) {
        currentRatingValue = 4;
    } else if (ratingFiveInput.checked == true) {
        currentRatingValue = 5;
    } else {
    }
    sessionStorage.setItem("currentRatingValue", currentRatingValue);
}