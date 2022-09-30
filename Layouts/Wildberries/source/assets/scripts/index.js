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
        let nameLinkLavelOneActive, nameContentLavelTwoActive;
        let nameLinkLavelTwoActive, nameContentLavelThreeActive;
        const
            sidebarContainer = document.getElementById('sidebar'),
            categoriesLavelOne = document.getElementById('categories--lavelOne'),
            categoriesLavelTwo = document.getElementById('categories--lavelTwo'),
            categoriesLavelThree = document.getElementById('categories--lavelThree');
        
        sidebarContainer.addEventListener('mouseover', _e => {
            const
                lavelOne = _e.target.closest('#categories--lavelOne'),
                lavelTwo = _e.target.closest('#categories--lavelTwo');
            if (lavelOne) {
                const nameLinkLavelOne = _e.target.closest('.categories-list_link');
                if (nameLinkLavelOne) {
                    categoriesLavelTwo.classList.add('active');

                    nameLinkLavelOneActive ? nameLinkLavelOneActive.classList.toggle('active') : 0;
                    nameLinkLavelOneActive = nameLinkLavelOne;
                    nameLinkLavelOne.classList.toggle('active');
                    
                    const
                        data = nameLinkLavelOne.dataset.categoriesLaveloneName,
                        contentLavelTwo = categoriesLavelTwo.querySelector(`.categories-content[data-categories-LavelOne-name="${data}"]`);
                    nameContentLavelTwoActive ? nameContentLavelTwoActive.classList.toggle('active') : 0;
                    nameContentLavelTwoActive = contentLavelTwo;
                    contentLavelTwo.classList.toggle('active');
                }
            }
            if (lavelTwo) {
                const nameLinkLavelTwo = _e.target.closest('.categories-list_link');
                if (nameLinkLavelTwo) {
                    categoriesLavelThree.classList.add('active');

                    nameLinkLavelTwoActive ? nameLinkLavelTwoActive.classList.toggle('active') : 0;
                    nameLinkLavelTwoActive = nameLinkLavelTwo;
                    nameLinkLavelTwo.classList.toggle('active');

                    const
                        data = nameLinkLavelTwo.dataset.categoriesLaveltwoName,
                        contentLavelThree = categoriesLavelThree.querySelector(`.categories-content[data-categories-LavelTwo-name="${data}"]`);
                    nameContentLavelThreeActive ? nameContentLavelThreeActive.classList.toggle('active') : 0;
                    nameContentLavelThreeActive = contentLavelThree;
                    contentLavelThree.classList.toggle('active');
                }
            }
        });
    },
    fixedScrollProductAside = () => {
        const
            aside = document.getElementById('product-aside'),
            offsetRight = aside.offsetRight
    };
sidebar();
fixedScrollProductAside();
productsRating ? ratingALLProducts() : null;