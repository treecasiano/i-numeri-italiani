$( document ).ready(function() {

  var numToTranslate;

  function generateNumber () {
    return Math.floor(Math.random() * (9999)) + 1;
  }

  $("#generateNum").on("click", function() {
    $("#showNum").text(generateNumber());
    numToTranslate = $("#showNum").text();
    console.log("number to be translated = " + numToTranslate);
  });

  $("#submitTranslation").on ("click", function() {
    var request = {
    text: numToTranslate
  };

  $.post("translate", request, function(response) {
    $("#showTranslation").text(response.translation);
  });

  console.log(request);

  });
});
