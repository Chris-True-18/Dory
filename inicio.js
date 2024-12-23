const button = document.getElementById('btn');


button.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'principal.html';
  }, 500);
});