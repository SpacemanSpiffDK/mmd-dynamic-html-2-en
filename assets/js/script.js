// JS by Dan Høegh
// UCN MMD 2020

// From https://gist.github.com/jjmu15/8646226
function isVisible(ele) {
    const {
        top,
        bottom
    } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        (top > 0 || bottom > 0) &&
        top < vHeight
    );
}

window.addEventListener('scroll', function () {
    // viewport animate
    const elm = document.querySelectorAll('.vp-animate');
    const skipAmount = 3;
    for (let i = 0; i < elm.length; i++) {
        if (i+1 > skipAmount && isVisible(elm[i])) {
            elm[i].classList.add('in-view');
        }
    }

    // lazy load
    const elmLazy = document.querySelectorAll('.lazyload');
    for (let i = 0; i < elmLazy.length; i++) {
        if (isVisible(elmLazy[i])) {
            elmLazy[i].src = elmLazy[i].dataset.lazyloadsrc;
            elmLazy[i].classList.remove('lazyload');
        }
    }


});