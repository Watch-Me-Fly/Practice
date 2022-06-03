/*
    The basic strategy is to keep the submenu hidden,
    and then show it using js and CSS display : none/block
*/
/*
  1. write a loop that adds this class to all the submenus and ul(s)
  using js first
*/
let submenus = document.querySelectorAll('ul li ul');
let menulinks = document.querySelectorAll('.menulink');

for (var i = 0; i < submenus.length; i++) {
    submenus[i].classList.add('hide-menu');
}
/*
  2. add a click handler to main links
*/
for (var i = 0; i < menulinks.length; i++) {
    menulinks[i].addEventListener('click', function (event) {
        event.preventDefault;
        /* 
            tell me which menu did i click on 
        */
        // var thisMenu = this;
        /*
            to get to the ul inside the main menu and change its class to 'show'
            we use this.parentNode.querySelector
        */
        var thisMenu = this.parentNode.querySelector('ul');
        // console.log(thisMenu.innerHTML); ===> // case sensitive
        if (thisMenu.className === 'hide-menu') {
            /* 
            i can also use :
                if (thisMenu.classList.contains('hide-menu'))
            */
            /*
                how to close other open / non active menus when i click on one
            */
            for (sub of submenus) {
                sub.classList.replace('show-menu', 'hide-menu');
            }
            thisMenu.classList.replace('hide-menu', 'show-menu');
        } else {
            thisMenu.classList.replace('show-menu', 'hide-menu');
        }
    });
}

