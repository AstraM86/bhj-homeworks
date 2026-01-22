const textarea = document.getElementById('editor');

document.addEventListener('input', () => {
  localStorage.setItem('lastText', textarea.value);
})

window.addEventListener('load', () => {
  textarea.value = localStorage.getItem('lastText') || '';
})