$( document ).ready(function() {
  var $numberButton = $("#generateNum");
  var $quiz = $("#quiz");
  var $quizButton = $("#quiz-button");
  var $lesson = $("#lesson");
  var $translateButton = $("#submitTranslation");
  var $userResponse = $("#user-response");

  var $correctAnswer = $("#correct-answer");
  var $wrongAnswer = $("#wrong-answer");
  var $totalScore = $("#total-score");

  var $resetButton = $("#reset-scores");
  var $toggleInstructions = $("#toggle-instructions");
  var $instructions = $("#instructions");
  var numToTranslate;

  var numCorrect = 0;
  var numWrong = 0;
  var numQuizzed = 0;
  var score = 0;

  var wrongAnswers = [];

  $translateButton.prop("disabled", true);
  $quiz.hide();

  /***********UTILITY FUNCTIONS**********/

  function resizeInput() {
      $(this).attr('size', $(this).val().length);
  }

  $('input[type="text"]')
      .keyup(resizeInput)
      .each(resizeInput);

  function generateNumber () {
    return Math.floor(Math.random() * (9999)) + 1;
  }

  /***********REVEALING QUIZ and LESSON**********/

  function showQuiz() {
    $quiz.slideDown(1000).delay(400);
    $lesson.slideUp(500).fadeOut(500);
    $("footer").hide();
  }

  function showLesson() {
    $lesson.slideDown(1000).delay(400);
    $quiz.slideUp(500).fadeOut(500);
    $instructions.fadeOut(1000).delay(1000);
    $toggleInstructions.text("show instructions");
    $("footer").show();
  }

  $quizButton.click(showQuiz);

  $("#quiz-jump").click(showQuiz);

  $("#show-lesson").click(showLesson);

  /***********GETTING NUMBERS**********/

  $numberButton.click(function() {
    $numberButton.text(generateNumber());
    $numberButton.addClass("large-number");
    numToTranslate = $numberButton.text();
    $translateButton.prop('disabled', false);
    $userResponse.prop('disabled', false);
    $translateButton.html("check answer");
    $userResponse.val("").removeClass("wrong-answer correct-answer");
    $userResponse.focus();
  });

  /***********GETTING TRANSLATION**********/

  function showCorrectAnswer(correctResponse) {
    $numberButton.html("&#9785 Incorrect!<br>THE CORRECT ANSWER IS <br>" + "<span class='highlight2'>"+ correctResponse + "</span>").removeClass("large-number");
  }

  function submitAnswer() {
    if (!$userResponse.val()) {
      $userResponse.attr("placeholder", "You must enter a translation!");
      $userResponse.focus();
    } else {
      $userResponse.prop("disabled", true);
      var request = {
      text: numToTranslate
      };

      $.post("translate", request, function(response) {
      console.log(response.translation);
      numQuizzed ++;

    /***********SCORING**********/
      if ($userResponse.val().toLowerCase() == response.translation) {
        $userResponse.addClass("correct-answer");
        $numberButton.text("CORRECT!");
        numCorrect ++;
        $correctAnswer.text(String(numCorrect));
      } else {
        $userResponse.addClass("wrong-answer");
        numWrong ++;
        $wrongAnswer.text(String(numWrong));
        wrongAnswers.push(numToTranslate);
        showCorrectAnswer(response.translation);
      }

      var score = Math.round((numCorrect/numQuizzed) * 100);
      $totalScore.text(String(score));
      $translateButton.prop("disabled", true);
      });
    }
  }

  $translateButton.click(submitAnswer);

  $userResponse.keypress(function(e){
    if (e.which==13) {
      if ($userResponse) {
        $numberButton.focus();
      }
      submitAnswer();
      this.blur();
    }
  });

  /***********RESETTING SCORES**********/

  $resetButton.click(function(){
    numCorrect = 0;
    numWrong = 0;
    numQuizzed = 0;
    score = 0;
    $totalScore.text(String(score));
    $correctAnswer.text(String(numCorrect));
    $wrongAnswer.text(String(numWrong));
    $numberButton.text("START");
    $translateButton.html("check answer").prop("disabled", true);
    $userResponse.val("").removeClass("wrong-answer correct-answer").prop("disabled", true);
  });

    /***********HIDE INSTRUCTIONS**********/

  $toggleInstructions.click(function(){

    if ($toggleInstructions.text() =="dismiss instructions") {
      $instructions.slideUp(500);
      $toggleInstructions.text("show instructions");
    } else {
      $instructions.slideDown(500);
      $toggleInstructions.text("dismiss instructions");
    }
    $numberButton.focus();
  });
});
