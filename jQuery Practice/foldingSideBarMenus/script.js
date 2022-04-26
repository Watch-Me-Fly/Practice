(function () {
    const submenus = document.querySelectorAll('ul li ul');
    const menulinks = document.querySelectorAll('.menulink');

    for (let i = 0; i < submenus.length; i++) {
        submenus[i].classList.add('hide-menu');
    }

    for (let i = 0; i < menulinks.length; i++) {
        menulinks[i].addEventListener('click', function (event) {
            event.preventDefault;

            var thisMenu = this.parentNode.querySelector('ul');
            if (thisMenu.className === 'hide-menu') {
                for (sub of submenus) {
                    sub.classList.replace('show-menu', 'hide-menu');
                }
                thisMenu.classList.replace('hide-menu', 'show-menu');
            } else {
                thisMenu.classList.replace('show-menu', 'hide-menu');
            }

        });
    }
})();
