// Handles next button click to go to next question
function goToNextPage(nextPage) {
  const selected = document.querySelector('select').value;
  if (selected) {
    window.location.href = nextPage;
  } else {
    alert("Please select an answer first!");
  }
}

// Background music handling to persist across SPA-like structure
// (This is best implemented via SPA routing or iframe wrapper)
// For GitHub Pages, music will restart on page load unless bundled via SPA framework
