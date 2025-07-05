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

// Resume music
window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  const savedTime = localStorage.getItem('musicTime');
  if (music && savedTime) {
    music.currentTime = parseFloat(savedTime);
  }

  music.play().catch(() => {
    document.addEventListener('click', () => {
      music.play();
    }, { once: true });
  });
});

// Save position before leaving
window.addEventListener('beforeunload', () => {
  const music = document.getElementById('bg-music');
  if (music) {
    localStorage.setItem('musicTime', music.currentTime);
  }
});



