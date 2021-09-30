function focused() {
    const fields = Array.from(document.getElementsByTagName('input'));

    for (let field of fields) {
        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(ev) {
        const target = ev.target;
        target.parentNode.classList.add('focused');
    }

    function onBlur(ev) {
        const target = ev.target;
        target.parentNode.classList.remove('focused');
    }
}