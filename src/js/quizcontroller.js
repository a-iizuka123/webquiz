function buildQuiz() {
  // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<div class="choices" name="question${questionNumber}" value="${letter}">
            ${letter} :
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

function showResults($userAnswer) {
  // gather answer containers from our quiz

  // keep track of user's answers
  let numCorrect = 0;

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

    // if answer is correct
    if (userAnswer === correctAns) {
      // add to the number of correct answers
      numCorrect++;
      //$userAnswer.css("background-color", "lightgreen");
      option = success;
    } else {
      $userAnswer.css("background-color", "red");
      //$('.choices[value=' + correctAns + ']').css("background-color", "lightgreen")
      incorrect.text = myQuestions[questionNumber].explanation;
      option = incorrect;
    }

    swal(option).then(function(val) {
      if (val) { // ok
        showNextSlide();
      } else { // cancel
      }
    });

  // show number of correct answers out of total
  // resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  $('.slide').eq(currentSlide).removeClass("active-slide");
  $('.slide').eq(n).addClass("active-slide");
  currentSlide = n;
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

let currentSlide = 0;

$(document).ready(function(){

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.querySelectorAll("results");
  const submitButton = document.querySelectorAll(".choices");

  // display quiz right away
  buildQuiz();

  showSlide(0);
});

// Promiseを使う方法
function sleepByPromise(sec) {

   return new Promise(resolve => setTimeout(resolve, sec*1000));

}

// async修飾子を使って非同期関数を宣言します。
async function wait(sec) {

   console.log('wait ' + sec.toString() + ' sec right now!');

   // await句を使って、Promiseの非同期処理が完了するまで待機します。
   await sleepByPromise(sec);

   console.log('wait ' + sec.toString() + ' sec done!');
}

// on submit, show results
$(document).on('click', '.choices', function() {

  showResults($(this));

})
