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
    sidebar = () => {
        functions.sidebarOpenClose();
        
    };
    // fixedScrollProductAside = () => {
    //     const
    //         fixedBlock = document.getElementById('product-aside-container'),
    //         parentFixedBlock = document.getElementById('product-main-container'),
    //         container = document.querySelector('.container'),
    //         offsetRight = container.offsetLeft + container.clientWidth - fixedBlock.clientWidth,
    //         parentFixedBlockTop = parentFixedBlock.getBoundingClientRect().top,
    //         smallOffset = 20,
    //         fixedScrollBlock = () => {
    //             const
    //                 scrollDistance = window.scrollY;
    //             if (scrollDistance > (parentFixedBlockTop - smallOffset) && scrollDistance <= (parentFixedBlock.clientHeight + parentFixedBlockTop)) {
    //                 fixedBlock.classList.remove('absolute');
    //                 fixedBlock.style.width = `${fixedBlock.clientWidth}px`
    //                 fixedBlock.style.left = `${offsetRight}px`;
    //                 fixedBlock.classList.add('fixed');
    //             } else {
    //                 fixedBlock.style.left = `0px`;
    //                 fixedBlock.classList.remove('fixed');
    //             }
    //             if (scrollDistance >= (parentFixedBlock.clientHeight + parentFixedBlockTop - fixedBlock.clientHeight - smallOffset)) {
    //                 fixedBlock.style.left = `0px`;
    //                 fixedBlock.classList.remove('fixed');
    //                 fixedBlock.classList.add('absolute');
    //             }
    //         };
    //     // fixedScrollBlock()
    //     window.addEventListener('scroll', fixedScrollBlock);
    // };
sidebar();
// fixedScrollProductAside();
productsRating ? ratingALLProducts() : null;