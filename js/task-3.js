const input = document.querySelector('#name-input');
console.log(input);

const output = document.querySelector('span#name-output');
console.log(output);

input.addEventListener('input', event => {
  if (event.target.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.target.value.trim();
  }
});
