document.addEventListener('DOMContentLoaded', function () {



    const menu = document.querySelector('.menu'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

 

});

