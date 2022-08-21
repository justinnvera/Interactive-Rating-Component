var currentRatingValue = sessionStorage.getItem("currentRatingValue");
var selectedText = document.getElementById("selected-text");

selectedText.innerHTML = "You have selected " + currentRatingValue + " out of 5";