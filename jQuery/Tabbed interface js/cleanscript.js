(function () {
    'use strict';

    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    tabs.forEach(tab => {
        tab.addEventListener('click', selectedTab);
    });

    function selectedTab(event) {
        event.preventDefault();

        const thisTab = event.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);
        const oldContent = document.querySelector('.visible');

        tabs.forEach(tab => {
            tab.removeAttribute('class');
        });
        event.target.className = 'active';
        oldContent.className = 'visuallyhidden';
        oldContent.addEventListener('transitionend', () => {
            oldContent.className = 'hidden';
            thisContent.className = 'visible visuallyhidden';

            setTimeout(() => {
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        }, {
            capture: false, once: true, passive: false
        });
    }
})();