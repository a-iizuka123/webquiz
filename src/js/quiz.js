// Whole-script strict mode syntax
"use strict";

// 正解数を保持
let numCorrect = 0;
// 問題数を保持
let numQuestions = 0;
// 表示中のスライド
let currentSlide = 0;

function buildQuiz() {
  // we'll need a place to store the HTML output
  const output = [];

  let arg = getUrlParams();
  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {

    if (currentQuestion.category !== arg.category) {
      return;
    }
    numQuestions++;

    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (let letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<div class="choices" name="question${questionNumber}" value="${letter}">
            ${currentQuestion.answers[letter]}
          </div>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="slide">
         <div class="question"> ${currentQuestion.question} </div>
         <div class="answers"> ${answers.join("")} </div>
         <div class="explanation"></div>
         <div class="results"></div>
       </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  $("#quiz").html(output.join(""));
}

function checkAnswer($userAnswer) {
  // gather answer containers from our quiz

    // find selected answer
    const userAnswer = $userAnswer.attr('value');
    const questionNumber = $userAnswer.attr('name').replace('question', '');
    const correctAns = myQuestions[questionNumber].correctAnswer

    var success = {
      title: "正解！",
      icon: "success",
      buttons: {
        cancel: "終了する", // キャンセルボタン
        ok: "次の問題"
      }
    };

    var incorrect = {
      title: "残念",
      text:"",
      icon: "error",
      buttons: {
        cancel: "終了する", // キャンセルボタン
        ok: "次の問題"
      }
    };

    let option = new Object;
    if (userAnswer === correctAns) {
      // add to the number of correct answers
      numCorrect++;
      $userAnswer.css("background-color", "lightgreen");
      option = success;
    } else {
      $userAnswer.css("background-color", "red");
      $('.choices[value=' + correctAns + ']').css("background-color", "lightgreen")
      incorrect.text = myQuestions[questionNumber].explanation;
      option = incorrect;
    }

    // 結果画面用に保持
    window.sessionStorage.setItem('numQuestions', numQuestions);
    window.sessionStorage.setItem('numCorrect', numCorrect);
    let mistakes = [];
    let past_mistakes = window.sessionStorage.getItem('mistakes');
    if (past_mistakes != undefined) {
      mistakes.push(past_mistakes);
    }
    mistakes.push (myQuestions[questionNumber].question);
    window.sessionStorage.setItem('mistakes', mistakes);


    // 次の画面へ
    swal(option).then(function(val) {
      if (val) { // ok
        showNextSlide();
      } else { // cancel
        window.location.href = "result.html";
      }
    });

  // show number of correct answers out of total
  // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  $('.slide').eq(currentSlide).removeClass("active-slide");
  $('.slide').eq(n).addClass("active-slide");
  $('.choices').css("background-color", "");
  currentSlide = n;
}

function showNextSlide() {
  if (currentSlide === numQuestions -1) {
    // 全ての問題を解いたら結果画面へ遷移
    window.location.href = "result.html";
  }
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

$(document).ready(function(){

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.querySelectorAll("results");
  const submitButton = document.querySelectorAll(".choices");

  // 問題を用意
  buildQuiz();

  // 1問目を表示
  showSlide(0);
});


$(document).on('click', '.choices', function() {

  // 正誤判定
  checkAnswer($(this));

})
