function askAI() {
  const question = document.getElementById("question").value;

  if (question.trim() === "") {
    document.getElementById("answer").innerText = "❌ Question likho";
    return;
  }

  document.getElementById("answer").innerText =
    "Tumne likha: " + question;
}