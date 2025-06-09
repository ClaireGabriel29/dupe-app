const questions = [
  { english: "Hello", dutch: "Hallo" },
  { english: "Goodbye", dutch: "Tot ziens" },
  { english: "Please", dutch: "Alsjeblieft" },
  { english: "Thank you", dutch: "Dank je" },
  { english: "Yes", dutch: "Ja" },
  { english: "No", dutch: "Nee" },
  { english: "Good morning", dutch: "Goedemorgen" },
  { english: "Good night", dutch: "Goedenacht" }
];

let currentIndex = 0;
let score = 0;

function showQuestion() {
  if (currentIndex < questions.length) {
    const q = questions[currentIndex];
    document.getElementById("question").textContent = `Translate to Dutch: ${q.english}`;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
  } else {
    document.getElementById("question-container").innerHTML = `<h2>All done! 🎉</h2>`;
    document.getElementById("score").textContent = `Your score: ${score}/${questions.length}`;
  }
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = questions[currentIndex].dutch.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "✅ Correct!";
    score++;
  } else {
    document.getElementById("feedback").textContent = `❌ Wrong
