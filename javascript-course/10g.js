function handleButton(selectedBtn) {
    const buttonElement = document.querySelector(selectedBtn);

    if (!buttonElement.classList.contains("is-toggled")) {
        removeToggledClass();
        buttonElement.classList.add('is-toggled');
    } else {
        buttonElement.classList.remove('is-toggled');
    }
}


function removeToggledClass() {
    const buttonElement = document.querySelector('.is-toggled');

    if (buttonElement) {
        buttonElement.classList.remove('is-toggled');
    }
}