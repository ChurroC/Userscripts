// ==UserScript==
// @name         removeTypeGameSound
// @namespace    http://tampermonkey.net/
// @version      2023-12-30
// @description  try to take over the world!
// @author       You
// @match        https://www.typing.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=typing.com
// @grant        none
// @downloadURL  https://github.com/ChurroC/TamperMonkey/raw/main/script.user.js
// @updateURL    https://github.com/ChurroC/TamperMonkey/raw/main/script.user.js
// ==/UserScript==

(async function () {
    'use strict';
    console.log('aa');
    /*
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    observer.disconnect();
                    resolve(document.querySelector(selector));
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    function printMousePos(event) {
        return ("clientX: " + event.clientX + " - clientY: " + event.clientY)
    }
    document.addEventListener("click", e => console.log);

    console.log("dd")

    const elm = waitForElm('canvas');*/
})();
