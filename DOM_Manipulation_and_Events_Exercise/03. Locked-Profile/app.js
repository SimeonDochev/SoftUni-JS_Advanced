function lockedProfile() {
    const buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.addEventListener('click', reveal);
    }

    function reveal(e) {
        const button = e.target;
        const eventDiv = e.target.parentElement
        const unlocked = eventDiv.querySelectorAll('input')[1];
        const hiddenInfo = eventDiv.querySelector('div');

        if (unlocked.checked) {
            if (button.textContent == 'Show more') {
                hiddenInfo.style.display = 'block';
                button.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}