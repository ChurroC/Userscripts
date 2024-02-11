// ==UserScript==
// @name         madeMangaSiteBetter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leveling-solo.org
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(domElement => {
        domElement.remove();
    });

    const img = document.querySelectorAll('img');
    img.forEach(domElement => {
        domElement.style.marginTop = '0px';
        domElement.style.marginBottom = '0px';
    });

    const startingPoint = document.querySelector('.about-section');
    const endingPoint = document.querySelector('div.entry-content>h2');
    while (startingPoint.nextElementSibling && startingPoint.nextElementSibling !== endingPoint) {
        startingPoint.nextElementSibling.remove();
    }

    document.querySelector('nav.navbar.navbar-default').removeAttribute('class');
})();
