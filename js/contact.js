const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');
const addressElement = document.getElementById('address');


function handleClick(event) {
  console.log(`Clicked: ${event.target.innerText}`);

  if (event.target === emailElement) {
    window.location.href = 'mailto:contact@example.com';
  }
}

function handleMouseOver(event) {
  console.log(`Mouseover: ${event.target.innerText}`);

}

function handleKeyPress(event) {
  console.log(`Keypress: ${event.key}`);

}
emailElement.addEventListener('click', handleClick);
phoneElement.addEventListener('click', handleClick);
addressElement.addEventListener('click', handleClick);

emailElement.addEventListener('mouseover', handleMouseOver);
phoneElement.addEventListener('mouseover', handleMouseOver);
addressElement.addEventListener('mouseover', handleMouseOver);

document.addEventListener('keypress', handleKeyPress);