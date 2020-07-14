const button = document.querySelector('.button');
const input = document.getElementById('input');
const output = document.getElementById('output');

button.addEventListener('click', inputMessage);

function inputMessage(){

  output.innerHTML = `"${input.value}"`;
}