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

  var numToTranslate;

  var numCorrect = 0;
  var numWrong = 0;
  var numQuizzed = 0;
  var score = 0;

  var wrongAnswers = [];

  $translateButton.prop('disabled', true);

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

  /***********REVEALING QUIZ**********/

  $quizButton.click(function() {
    $quiz.slideDown(2000).delay(400);
    $lesson.slideUp(2000).fadeOut(1500);
  });

  /***********GETTING NUMBERS**********/

  $numberButton.click(function() {
    $numberButton.text(generateNumber());
    $numberButton.addClass('large-number');
    numToTranslate = $numberButton.text();
    $translateButton.prop('disabled', false);
    $userResponse.prop('disabled', false);
    $translateButton.html("check answer");
    $userResponse.val("").removeClass("wrong-answer correct-answer");
    $userResponse.focus();
  });

  /***********GETTING TRANSLATION**********/

  function submitAnswer() {
    if (!$userResponse.val()) {
      $userResponse.attr("placeholder", "PLEASE ENTER YOUR TRANSLATION");
      $userResponse.focus();
    } else {
      $userResponse.prop('disabled', true);
      var request = {
      text: numToTranslate
      };

      $.post("translate", request, function(response) {
      $translateButton.text(response.translation);
      console.log(response.translation);
      numQuizzed ++;

    /***********SCORING**********/
      if ($userResponse.val() == response.translation) {
        $userResponse.addClass("correct-answer");
        $translateButton.text("CORRECT!");
        numCorrect ++;
        $correctAnswer.text(String(numCorrect));

      } else {
        $userResponse.addClass("wrong-answer");
        $translateButton.text("INCORRECT ANSWER!");
        numWrong ++;
        $wrongAnswer.text(String(numWrong));
        wrongAnswers.push(numToTranslate);
        console.log(wrongAnswers);
      }

      var score = Math.round((numCorrect/numQuizzed) * 100);
      $totalScore.text(String(score));
      $translateButton.prop('disabled', true);
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
    $translateButton.html("check answer");
    $userResponse.val("").removeClass("wrong-answer correct-answer");
  });

});
