function goToPage2(choice) {
  document.getElementById('page1').classList.add('hidden');
  document.getElementById('page2').classList.remove('hidden');
  const title = choice === 'curious'
    ? "We like you already."
    : "Well, at least you're honest. Let’s fix that.";
  document.getElementById('page2-title').innerText = title;

  const body = document.getElementById('quizBody');
  body.className = choice === 'curious' ? 'curious' : 'judgmental';
}

function goToPage3() {
  document.getElementById('page2').classList.add('hidden');
  document.getElementById('page3').classList.remove('hidden');
}

function showResult() {
  const form = document.getElementById('quizForm');
  const formData = new FormData(form);
  let score = 0;

  for (let [_, value] of formData.entries()) {
    if (value === 'rebel') score += 1;
  }

  document.getElementById('page3').classList.add('hidden');
  document.getElementById('page4').classList.remove('hidden');

  let result = '';
  if (score >= 2) {
    result = "You're 86% NotTheBestApproved™. You're one of us.";
  } else {
    result = "You're 73% socially camouflaged. Let’s fix that.";
  }

  document.getElementById('resultText').innerText = result;
}
