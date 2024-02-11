// ==UserScript==
// @name         30SecOfInterviewMoreFun
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://30secondsofinterviews.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=30secondsofinterviews.org
// @grant        none
// ==/UserScript==

(function () {
    const randomButton = document.createElement('button');
    randomButton.id = 'randomButton';
    randomButton.innerHTML = 'Random';

    const style = document.createElement('style');
    style.appendChild(document.createTextNode(buttonCss));
    document.getElementsByTagName('head')[0].appendChild(style);

    const questions = document.querySelectorAll('.Question-wrapper');
    let randomItem;
    randomButton.onclick = () => {
        if (randomItem) {
            const questionBox = randomItem.querySelector('.Question');
            console.log(questionBox);
            questionBox.classList.remove('highlight');
        }
        randomItem = questions[Math.floor(Math.random() * questions.length)];
        randomItem.scrollIntoView({
            behavior: 'smooth',
        });
        if (randomItem) {
            const questionBox = randomItem.querySelector('.Question');
            questionBox.classList.add('highlight');
        }
        console.log(randomItem);
    };

    document.body.appendChild(randomButton);
})();
