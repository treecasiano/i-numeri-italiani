( function( $ ) {
  var $displayBox = $( "#display-box" );
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
  var numToTranslate;

  var numCorrect = 0;
  var numWrong = 0;
  var numQuizzed = 0;
  var score = 0;

  var wrongAnswers = [];

  $translateButton.prop( "disabled", true );
  $quiz.hide();
  $instructions.hide();

  /***********UTILITY FUNCTIONS**********/

  function resizeInput() {
    $( this ).attr( "size", $( this ).val().length );
  }

  $( 'input[type="text"]' )
      .keyup( resizeInput )
      .each( resizeInput );

  function generateNumber () {
    return Math.floor( Math.random() * ( 9999 ) ) + 1;
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
    $displayBox.text( generateNumber() );
    $displayBox.addClass( "large-number" );
    numToTranslate = $displayBox.text();
    $translateButton.prop( "disabled", false );
    $userResponse.prop( "disabled", false );
    $translateButton.html( "check answer" );
    $userResponse.val( "" ).removeClass( "wrong-answer correct-answer" );
    $userResponse.focus();
    $userResponse.attr( "placeholder", "enter translation" );
  } );

  /***********GETTING TRANSLATION**********/

  function showCorrectAnswer( correctResponse ) {
    $displayBox.html( "&#9785 Incorrect!<br>THE CORRECT ANSWER IS <br>" +
      "<span class='answer-feedback'>" +
      correctResponse + "</span>" )
      .removeClass( "large-number" );
  }

  function submitAnswer() {
    if ( !$userResponse.val() ) {
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
        $displayBox.text( "CORRECT!" );
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
    $displayBox.text( "" );
    $translateButton.html( "check answer" ).prop( "disabled", true );
    $userResponse.val( "" ).removeClass( "wrong-answer correct-answer" ).prop( "disabled", true );
    $userResponse.prop( "placeholder", "" ) ;
    $getNumber.focus();
  } );

    /***********HIDE INSTRUCTIONS**********/

  $showInstructions.click( function() {
    $instructions.show();
  } );

  $hideInstructions.click( function() {
    $instructions.hide();
  } );
} )( jQuery );
