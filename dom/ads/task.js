document.addEventListener('DOMContentLoaded', () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentInd = 0;

    setInterval(() => {
      cases [currentInd].classList.remove('rotator__case_active');
      currentInd = (currentInd + 1) % cases.length;
      cases[currentInd].classList.add('rotator__case_active');
    }, 1000);
  });
});