const buttonEls = document.querySelectorAll('button');
const inputFieldEl = document.querySelector('.user-input');

function calculate() {
  const expression = inputFieldEl.value;
  if (expression === '') {
  } else {
    inputFieldEl.value = eval(expression);
  }
}

buttonEls.forEach((buttonEl) => {
  buttonEl.addEventListener('click', () => {
    const btnValue = buttonEl.innerText;

    if (btnValue === 'AC') {
      inputFieldEl.value = '';
    } else if (btnValue === '=') {
      calculate();
    } else {
      inputFieldEl.value += btnValue;
    }
  });
});
