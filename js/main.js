document.addEventListener('DOMContentLoaded', function () {



    const menu = document.querySelector('.menu-list'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu-list_active');
    });

 

});

