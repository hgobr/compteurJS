const buttons = document.querySelectorAll('button');
const counter = document.querySelector('.counter');

const updateCounter = function (ev) {
  const button = ev.target;
  const previousValue = parseInt(counter.innerText);

  if (button.classList.contains('add')) {
    counter.innerText = `${previousValue + 1}`;
  } else if (button.classList.contains('sub')) {
    counter.innerText = `${previousValue - 1}`;
  } else if (button.classList.contains('reset')) {
    counter.innerText = '0';
  }

  const currentValue = parseInt(counter.innerText);

  if (currentValue > 0) {
    counter.style.color = '#72e781';
  } else if (currentValue < 0) {
    counter.style.color = '#a90e35';
  } else {
    counter.style.color = '#dfd9ed';
  }
};

const updateCounterColor = function () {};

buttons.forEach((buttons) => {
  buttons.addEventListener('click', updateCounter);
});
