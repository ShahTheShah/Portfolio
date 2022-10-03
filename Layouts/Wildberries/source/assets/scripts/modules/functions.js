'use strict';

// (() => {
//     let webP = new Image();
//     webP.onload = webP.onerror = () => (webP.height == 2) == true
//         ? document.querySelector('body').classList.add('webp')
//         : document.querySelector('body').classList.add('no-webp');
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// })();

const functions = {
    hello: name => `Hello, ${name}!`,
    sidebarOpenClose: () => {
        const
            openButton = document.getElementById('sidebarOpen'),
            closeButton = document.getElementById('sidebarClose'),
            sidebar = document.getElementById('sidebar'),
            body = document.body;
        openButton.addEventListener('click', _e => {
            sidebar.classList.toggle('sidebar--active');
            body.classList.toggle('sidebarActive');
        });
        closeButton.addEventListener('click', _e => {
            sidebar.querySelectorAll('.active').forEach(elem => elem.classList.remove('active'))
            sidebar.classList.toggle('sidebar--active');
            body.classList.toggle('sidebarActive');
        });
    }
};

export default functions;