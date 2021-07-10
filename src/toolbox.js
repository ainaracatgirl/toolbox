function tbx(sel) {
    /** @type {HTMLElement} */
    const s = document.querySelector(sel);
    s.show = () => {
        s.style.display = 'block';
    }
    s.hide = () => {
        s.style.display = 'none';
    }
    s.addClass = (className) => {
        s.classList.add(className);
    }
    s.removeClass = (className) => {
        s.classList.remove(className);
    }
    s.toggleClass = (className) => {
        s.classList.toggle(className);
    }
    return s;
}