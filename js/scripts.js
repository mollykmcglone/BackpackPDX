$(document).ready(function() {
  $("#questions form").submit(function(event) {
    var questions = ["Experience", "Days", "Travel"];
    var counta = 0
    var countb = 0
    var countc = 0

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
      $("#place1").show();
    } else if (countb > counta && countc){
      $("#place2").show();
    } else {
      $("#place3").show();
    }
    
    event.preventDefault();
  });
});


//create a loop to capture user input from each question and assign answers to variables (actual answers or just the a, b, c indication?)
// create a conditional statement to evaluate answers for a, b, c and count numbers of each
//print correct destination based on numbers of a, b, c provided in answers
