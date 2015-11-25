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
    $quiz.slideDown(3000).delay(800);
    $lesson.slideUp(3000).fadeOut(2000);
  });

  /***********GETTING NUMBERS**********/

  $numberButton.click(function() {
    $numberButton.text(generateNumber());
    $numberButton.addClass('large-number');
    numToTranslate = $numberButton.text();
    $translateButton.prop('disabled', false);
    $translateButton.html("check answer");
    $userResponse.val("").removeClass("wrong-answer correct-answer");
  });

  /***********GETTING TRANSLATION**********/

  $translateButton.click(function() {
    var request = {
      text: numToTranslate
    };

    $.post("translate", request, function(response) {
      $translateButton.text(response.translation);

      numQuizzed ++;

    /***********SCORING**********/
      if ($userResponse.val() == response.translation) {
        $userResponse.addClass("correct-answer");
        $translateButton.text("CORRECT!");
        numCorrect ++;
        $correctAnswer.text(String(numCorrect));

      } else {
        $userResponse.addClass("wrong-answer");
        numWrong ++;
        $wrongAnswer.text(String(numWrong));
      }

      var score = Math.round((numCorrect/numQuizzed) * 100);
      console.log(numCorrect, numQuizzed, score);
      $totalScore.text(String(score));
      $translateButton.prop('disabled', true);
    });
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
    $numberButton.removeClass("large-number").text("click to generate number");
    $translateButton.html("check answer");
    $userResponse.val("").removeClass("wrong-answer correct-answer");
  });

});
