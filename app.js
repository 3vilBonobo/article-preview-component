function shareToggle() {
  let shareSection = document.querySelector('.share-section');

  if (shareSection.style.display === 'flex') {
    shareSection.style.display = 'none';
  } else {
    shareSection.style.display = 'flex';
  }
}
