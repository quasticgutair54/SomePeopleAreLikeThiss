// Handle question navigation
function goToNextPage(nextPage) {
  const selected = document.querySelector('select').value;
  if (selected) {
    // Save current audio time before navigating
    const music = document.getElementById('bg-music');
    if (music) {
      localStorage.setItem('musicTime', music.currentTime);
    }
    window.location.href = nextPage;
  } else {
    alert("Please select an answer before continuing.");
  }
}

// Resume music from previous page
window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');

  if (music) {
    const savedTime = localStorage.getItem('musicTime');
    if (savedTime) {
      music.currentTime = parseFloat(savedTime);
    }

    music.play().catch(() => {
      // fallback: play on first user interaction
      document.addEventListener('click', () => {
        music.play();
      }, { once: true });
    });
  }
});


