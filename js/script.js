document.cookie = 'cookie1=value1; SameSite=Strict';
const btnMenu = document.querySelector('#btnMenu');
const menuMobile = document.querySelector('#menuMobile');
const ddContent = document.querySelector('#ddContent');

btnMenu.addEventListener('click',
    function () {
        if (ddContent.style.display === 'none') {
            ddContent.style.display = 'block';
        } else {
            ddContent.style.display = 'none';

        };
        
    });