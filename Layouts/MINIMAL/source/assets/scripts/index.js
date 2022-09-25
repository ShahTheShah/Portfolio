'use strict';

import functions from './modules/functions.js';

const
    body = document.body,
    navOpen = document.getElementById('navOpen'),
    navList = document.getElementById('navList');

navOpen.addEventListener('click', _e => {
    navOpen.classList.toggle('close');
    navList.classList.toggle('open');
    body.classList.toggle('navOpen');
});