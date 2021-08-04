let shareSection = document.querySelector('.share-section');

function shareToggle() {
  if (shareSection.style.display === 'none') {
    shareSection.style.display = 'flex';
  } else {
    shareSection.style.display = 'none';
  }
}
