const rotatorCase = document.querySelectorAll('.rotator__case');
let i = 0;
let speed = (+document.getElementsByClassName('rotator__case_active')[0].getAttribute('data-speed'));

let timer = setTimeout(function updateHtml() {
  if (i === rotatorCase.length) {
    i = 0;
  }
  if (i > 0 && rotatorCase[i - 1].className.includes('rotator__case_active')) {
      rotatorCase[i - 1].classList.remove('rotator__case_active');
  } else if (i === 0 && rotatorCase[rotatorCase.length - 1].className.includes('rotator__case_active')) {
    rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active')
  }

  rotatorCase[i].classList.add('rotator__case_active');
  const span = document.getElementsByClassName('rotator__case_active')[0];
  speed = (+span.getAttribute('data-speed'));
  const color = span.getAttribute('data-color');
  span.style.color = color
  console.log(speed, Date());
  timer = setTimeout(updateHtml, speed);

  i = i + 1;
}, 1000)


/*document.addEventListener('DOMContentLoaded', () => {
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
});*/