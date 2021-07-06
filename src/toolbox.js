function tbx(sel) {
    const s = document.querySelector(sel);
    s.show = () => {
        s.style.display = 'block';
    }
    s.hide = () => {
        s.style.display = 'none';
    }
    return s;
}