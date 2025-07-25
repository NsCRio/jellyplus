/**
 *
 * Jellyfin Custom Scripts
 *
 */

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

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

// waitForElm('.btnPlay').then((elm) => {
//     console.log('Element is ready');
//     elm.classList.add("hide");
//     //console.log(elm.textContent);
// });

/**
 *
 * End Jellyfin Custom Scripts
 *
 */
