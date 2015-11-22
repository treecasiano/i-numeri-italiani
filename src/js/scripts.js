// TODO: allow users to edit the range of numbers
function generateNumber () {
  return Math.floor(Math.random() * (9)) + 1;
}

$( document ).ready(function() {
    var numToTranslate;
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
