( function( $ ) {
  var $displayBox = $( "#display-box" );
  var $displayText = $( "#display-text" );
  var $getNumber = $( "#get-number" );
  var $quiz = $( "#quiz" );
  var $quizButton = $( "#quiz-button" );
  var $lesson = $( "#lesson" );
  var $translateButton = $( "#submit-translation" );
  var $userResponse = $( "#user-response" );

  var $correctAnswer = $( "#correct-answer" );
  var $wrongAnswer = $( "#wrong-answer" ) ;
  var $totalScore = $( "#total-score" );

  var $resetButton = $( "#reset-scores" );
  var $showInstructions = $( "#show-instructions" );
  var $hideInstructions = $( "#hide-instructions" );
  var $instructions = $( "#instructions-overlay" );
  var $showRangeButton = $( "#show-range-form" );
  var $chooseRangeForm = $( "#choose-range-form" );
  var $quizWrapper = $( "#quiz-wrapper" );
  var $minNum = $( "#minNum" );
  var $maxNum = $( "#maxNum" );
  var numToTranslate;
  var numCorrect = 0;
  var numWrong = 0;
  var numQuizzed = 0;
  var score = 0;

  var wrongAnswers = [];

  $translateButton.prop( "disabled", true );
  $quiz.hide();
  $instructions.hide();
  $chooseRangeForm.hide();

  /***********UTILITY FUNCTIONS**********/

  function generateNumber () {
    var min = _.parseInt( $minNum.val() ) || 1;
    var max = _.parseInt( $maxNum.val() ) || 9999;
    return _.random( min, max );
  }

  /***********REVEALING QUIZ and LESSON**********/

  function showQuiz() {

    $quiz.slideDown( 1000 ).delay( 300 );
    $lesson.slideUp( 500 ).fadeOut( 500 );
    $( "footer" ).hide();
    $( "header" ).slideUp( 1000 ).delay( 400 );
  }

  function showLesson() {
    $lesson.slideDown( 1000 ).delay( 400 );
    $quiz.slideUp( 500 ).fadeOut( 500 );
    $instructions.fadeOut( 1000 ).delay( 1000 );
    $showInstructions.text( "show instructions" );
    $( "footer" ).show();
    $( "header" ).slideDown( 1000 ).delay( 400 );
  }

  $quizButton.click( showQuiz );

  $( "#quiz-jump" ).click( showQuiz );

  $( "#show-lesson" ).click( showLesson );

  /***********GETTING NUMBERS**********/

  $getNumber.click( function() {
    $displayText.text( generateNumber() );
    $displayText.addClass( "large-number" );
    numToTranslate = $displayBox.text();
    $translateButton.prop( "disabled", false );
    $userResponse.prop( "disabled", false );
    $translateButton.html( "check answer" );
    $userResponse.val( "" ).removeClass( "wrong-answer correct-answer" );
    $userResponse.focus();

    // TODO: Create feedback that is more accessible than using the placeholder
     /*Placeholder text disappears on focus, which makes it a bad way to provide
    feedback to people using screen readers and keyboard-only navigation*/
    $userResponse.attr( "placeholder", "enter translation" );
  } );

  /***********GETTING TRANSLATION**********/

  function showCorrectAnswer( correctResponse ) {
    $displayText.html( "&#9785 Incorrect!<br>THE CORRECT ANSWER IS <br>" +
      "<span class='answer-feedback'>" +
      correctResponse + "</span>" )
      .removeClass( "large-number" );
  }

  function submitAnswer() {
    if ( !$userResponse.val() ) {

      // TODO: Replace feedback mechanism with something more accessible
      $userResponse.attr( "placeholder", "ENTER A RESPONSE" );
      $userResponse.focus();
    } else {
      $userResponse.prop( "disabled", true );
      var request = {
      text: numToTranslate
      };

      $.post( "translate", request, function( response ) {
        console.log( response.translation );
        numQuizzed++;

    /***********SCORING**********/
      if ( $userResponse.val().toLowerCase() == response.translation ) {
        $userResponse.addClass( "correct-answer" );
        $displayText.text( "CORRECT!" );
        numCorrect++;
        $correctAnswer.text( String( numCorrect ) );
      } else {
        $userResponse.addClass( "wrong-answer" );
        numWrong++;
        $wrongAnswer.text( String( numWrong ) );
        wrongAnswers.push( numToTranslate );
        showCorrectAnswer( response.translation );
      }

      var score = Math.round( ( numCorrect / numQuizzed ) * 100 );
      $totalScore.text( String( score ) );
      $translateButton.prop( "disabled", true );
      } );
    }
  }

  $translateButton.click( submitAnswer );

  $userResponse.keypress( function( e ) {
    if ( e.which == 13 ) {
      if ( $userResponse ) {
        $getNumber.focus();
      }
      submitAnswer();
      this.blur();
    }
  } );

  /***********RESETTING SCORES**********/

  $resetButton.click( function() {
    numCorrect = 0;
    numWrong = 0;
    numQuizzed = 0;
    score = 0;
    $totalScore.text( String( score ) );
    $correctAnswer.text( String( numCorrect ) );
    $wrongAnswer.text( String( numWrong ) );
    $displayText.text( "" );
    $translateButton.html( "check answer" ).prop( "disabled", true );
    $userResponse.val( "" ).removeClass( "wrong-answer correct-answer" ).prop( "disabled", true );
    $userResponse.prop( "placeholder", "" ) ;
    $getNumber.focus();
  } );

    /***********TOGGLE RANGE SELECTION FORM**********/

  $showRangeButton.click( function() {
    $quizWrapper.slideToggle( "slow" );
    $chooseRangeForm.slideToggle( "slow" );
    if ( $showRangeButton.text() == "select a new range" ) {
      $showRangeButton.text( "return to quiz" );
      $minNum.focus();
    } else {
      $showRangeButton.text( "select a new range" );
      $getNumber.focus();
    }
  } );

  $minNum.keypress( function( e ) {
    if ( e.which == 13 ) {
      if ( $minNum ) {
        $maxNum.focus();
      }
      this.blur();
    }
  } );

  $maxNum.keypress( function( e ) {
    if ( e.which == 13 ) {
      if ( $maxNum ) {
        $showRangeButton.click();
      }
      this.blur();
    }
  } );

    /***********HIDE INSTRUCTIONS**********/

  $showInstructions.click( function() {
    $instructions.show();
  } );

  $hideInstructions.click( function() {
    $instructions.hide();
  } );
} )( jQuery );
