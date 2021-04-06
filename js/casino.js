
const casinoPro = document.getElementById('casino-pro');
const casinoProDown = document.getElementById('casino-pro-down');


const ProviderOpen = () => {
    casinoProDown.classList.toggle('disp-block');
}

casinoPro.addEventListener('click', ProviderOpen);