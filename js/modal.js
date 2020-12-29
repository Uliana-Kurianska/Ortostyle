  
const modal = document.getElementById('simpleModal');
const open = document.getElementById('open');
const close = document.getElementsByClassName('closeBtn')[0];


// Show modal
open.addEventListener('click', openModal);

// Hide modal
close.addEventListener('click', closeModal);
// Hide modal on outside click
window.addEventListener('click', outsideClick);
function openModal() {
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
}

