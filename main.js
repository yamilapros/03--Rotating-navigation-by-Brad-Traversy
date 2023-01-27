const openElement = document.getElementById('open');
const closeElement = document.getElementById('close');
const containerElement = document.querySelector('.container');

//Open nav
openElement.addEventListener('click', () => {
    containerElement.classList.add('show-nav');
});

//Close nav
closeElement.addEventListener('click', () => {
    containerElement.classList.remove('show-nav');
});