const menuButton = document.querySelector('.menu');
const menu = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li');

// Evento para abrir/cerrar el menú al hacer clic en el icono
menuButton.addEventListener('click', () => {
    menu.classList.toggle('show'); 
    menuButton.classList.toggle('active');
});

// Cerrar el menú cuando se haga clic en una opción
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('show'); 
        menuButton.classList.remove('active'); 
    });
});