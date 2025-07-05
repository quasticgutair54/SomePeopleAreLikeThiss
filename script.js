// Handle dropdown selection and go to next page
function goToNextPage(nextPage) {
  const selected = document.querySelector('select');
  if (selected && selected.value) {
    const music = document.getElementById('bg-music');
    if (music) {
      localStorage.setItem('musicTime', music.currentTime);
    }
    window.location.href = nextPage;
  } else {
    alert("Please select an answer before continuing.");
  }
}

// Resume music from previous page time
window.addEventListener('load', () => {
  const music = document.getElementById('bg-music');
  const savedTime = localStorage.getItem('musicTime');

  if (music) {
    if (savedTime) {
      music.currentTime = parseFloat(savedTime);
    }

    music.play().catch(() => {
      // If autoplay is blocked, play on first user interaction
      document.addEventListener('click', () => {
        music.play();
      }, { once: true });
    });
  }
});

// Save music position before navigating away
window.addEventListener('beforeunload', () => {
  const music = document.getElementById('bg-music');
  if (music) {
    localStorage.setItem('musicTime', music.currentTime);
  }
});




