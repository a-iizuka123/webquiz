// Whole-script strict mode syntax
"use strict";

function showResults() {

  let numQuestions = window.sessionStorage.getItem('numQuestions');
  let numCorrect = window.sessionStorage.getItem('numCorrect');
  let mistakes = window.sessionStorage.getItem('mistakes');

  console.log("numQuestions = " + numQuestions);
  console.log("numCorrect = " + numCorrect);

  let correct_rate = (numCorrect / numQuestions) * 100;
  console.log("correct_rate = " + correct_rate);
  console.log("mistakes = " + mistakes);

  $("div#accuracy_rate span").attr('data-count', correct_rate);

  let message = "";
  let ribon_color = "";
  let ribon_right_color = "";

  if (correct_rate == 100) {
    message = "Perfect!!";
    ribon_color = '#fff001';
    ribon_right_color = 'yellow';
  } else if (80 <= correct_rate && correct_rate < 100) {
    message = "Very Good!!";
    ribon_color = '#a0c238';
    ribon_right_color = 'lightgreen';
  } else if (50 <= correct_rate && correct_rate < 80) {
    message = "Good!!";
    ribon_color = '#70c7ff';
    ribon_right_color = '#6eb3e0';
  } else {
    message = "Oh...";
    ribon_color = '#c93a40';
    ribon_right_color = 'red';
  }

  $('#message').html(message);
  $('#message').css('background-color', ribon_color);
  $('#message').css('border-right', ribon_right_color);

  window.sessionStorage.clear();
}

$(document).ready(function(){
    showResults();

    countUp();
});
