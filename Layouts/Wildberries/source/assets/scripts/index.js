'use strict';

import functions from './modules/functions.js';




const
    productsRating = document.querySelectorAll('.estimation-stars'),
    ratingALLProducts = () => {
        productsRating.forEach(productRating => {
            const stars = productRating.classList[2].split('-')[1] > 5 ? 5 : productRating.classList[2].split('-')[1];
            const spans = productRating.querySelectorAll('span');
            for (let i = 0; i < stars; i++) {
                spans[i].classList.add('active')
            }
        });
    },
    sidebarListen = () => {
        const
            openButton = document.getElementById('sidebarOpen'),
            closeButton = document.getElementById('sidebarClose'),
            sidebar = document.getElementById('sidebar'),
            body = document.body;
        openButton.addEventListener('click', _e => {
            sidebar.classList.toggle('active');
            body.classList.toggle('sidebarActive');
        });
        closeButton.addEventListener('click', _e => {
            sidebar.classList.toggle('active');
            body.classList.toggle('sidebarActive');
        });
    };
sidebarListen()
productsRating ? ratingALLProducts() : null;