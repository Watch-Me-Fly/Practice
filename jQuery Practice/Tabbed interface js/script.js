/*
    we're using css and classes in the absence of jQuery library. and manipulate them using css
*/
const tabs = document.querySelectorAll('#tabs > ul > li > a');

tabs.forEach(function (tab) {
    /*
        foreach is a loop method, in which we add a function, takes a variable that will work on each element
    */
    tab.addEventListener('click', selectedTab);
});
/*
    in arrow functions, if i pass a single variable inside (), i can remove them from around it. so:
        (tab) => {...}
        becomes :
        tab => {...}
*/

// for (eachTab of tabs) {
//     eachTab.addEventListener('click', selectedTab);
// }

// for (let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener('click', selectedTab);
// }

function selectedTab(event) {
    event.preventDefault();
    /*
        preventDefault() will prevent the hash from showing up on click
    */
    tabs.forEach(function (tab) {
        tab.removeAttribute('class');
    });
    // or :
    // for (let i = 0; i < tabs.length; i++) {
    //     // - remove class 'active'
    //     tabs[i].removeAttribute('class');
    // }
    // - add class 'to clicked tab'
    event.target.className = 'active';
    /*
        event.target will get current item
    */

    // make a variable of current tab and content
    const thisTab = event.target.getAttribute('href');
    const thisContent = document.querySelector(thisTab);

    // old tab and its content
    const oldContent = document.querySelector('.visible');
    oldContent.className = 'visuallyhidden';
    /*
        visuallyhidden: to give a blur out effect using css
    */
    oldContent.addEventListener('transitionend', function () {
        /*
            transitionend: to work at the end of css transition
        */
        oldContent.className = 'hidden';
        // set current to visible but opacity at zero
        thisContent.className = 'visible visuallyhidden';
        setTimeout(() => {
            // wait until the transition ends
            // after a short set time out, change its opacity to 1 to fade in
            thisContent.classList.remove('visuallyhidden');
        }, 20);
    }, {
        capture: false, once: true, passive: false
    });

    /*
        problem of 'flashing' 
            is due to transition end event listener that gets fired up on each click.
            - so add an object at the end of function in transition end at line 50
            - 3 settings to add to the event listener (capture, once, passive)
            - the only one that we care about is 'once: true' :
                * it means add this to the event listener once, and when you're done with it, remove it
            - capture and passive are all false by default
    */
}