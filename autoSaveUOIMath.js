// ==UserScript==
// @name         autoSave
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://courseware.illinois.edu/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=illinois.edu
// @grant        none
// ==/UserScript==

(async function () {
    'use strict';
    console.log('Start autoSaveUOIMath');

    const debounce = (callback, wait) => {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback.apply(null, args);
            }, wait);
        };
    };

    const amountOfTabs = 1;

    const observer = new MutationObserver(async () => {
        console.log(document.querySelectorAll('.x-box-target')[6].childElementCount !== amountOfTabs);
        console.log('test1');
        if (document.querySelectorAll('.x-box-target')[6].childElementCount !== amountOfTabs) {
            console.log('test2');
            observer.disconnect();
            const iframe = document.querySelectorAll('iframe')[1];
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('test3');
            iframe.contentWindow.document.addEventListener(
                'keyup',
                debounce(() => {
                    console.log('test');
                    (iframe.contentDocument || iframe.contentWindow.document).querySelector('button#ext-gen22').click();
                }, 700)
            );
            console.log('test4');
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();
