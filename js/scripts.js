$(document).ready(function() {
  $("#questions form").submit(function(event) {

    var questions = ["Experience", "Days", "Travel", "Miles", "Difficulty"];
    var counta = 0;
    var countb = 0;
    var countc = 0;
    var answer = "";

    questions.forEach(function(question) {
      var answer = $("input#" + question).val();
        if (answer === "a"){
          counta += 1;
        } else if (answer === "b"){
        countb += 1;
        } else {
        countc += 1;
        }
    });

    if (counta > countb && counta > countc) {
      $("#questions").hide();
      $("#place1").show();
    } else if (countb > counta && countb > countc){
      $("#questions").hide();
      $("#place2").show();
    } else {
      $("#questions").hide();
      $("#place3").show();
    }

  event.preventDefault();
  });
});
