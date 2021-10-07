function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', verify);
    const emailPattern = /^[a-z]+@[a-z]+.[a-z]+$/

    function verify(e) {
        let email = e.target.value;
        if (!emailPattern.test(email)) {
            inputField.classList.add('error');
            console.log(inputField.classList);
        } else {
            inputField.classList.remove('error');
        }
    }
}