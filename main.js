let button = document.getElementById("btn");
let score = 0;
let percentage = 0;
button.addEventListener("click", btnclick);
function btnclick() {
  score = 0;
  percentage = 0;
  score += markQuestion(1, 19);
  score += markQuestion(2, 100);
  score += markQuestion(3, 2);
  score += markQuestion(4, 12);
  percentage = (100 / 4) * score;
  document.getElementById("results").innerHTML = `You got ${score}/4 ${percentage}%`;
}

function markQuestion(qnum, correctanswer) {
  if (document.getElementById(`question${qnum}`).value == correctanswer) {
    document.getElementById(`${qnum}`).innerHTML = "correct";
    document.getElementById(`${qnum}`).style.color = "#008000";

    return 1;
  } else {
    document.getElementById(`${qnum}`).innerHTML = "incorrect";
    document.getElementById(`${qnum}`).style.color = "#FF0000";

    return 0;
  }
}
