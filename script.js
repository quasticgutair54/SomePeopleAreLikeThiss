function goToNextPage(nextPage) {
  const selected = document.querySelector('select').value;
  if (selected) {
    window.location.href = nextPage;
  } else {
    alert("Please select an answer before continuing.");
  }
}

