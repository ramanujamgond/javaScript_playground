function handleButton(buttonValue) {
  let btn = document.querySelector(buttonValue);

  if (btn.classList.contains("is-toggled")) {
    // check if the button is already turned on then make it off and vice versa
    turnBtnOff();

    btn.classList.remove("is-toggled");
  } else {
    btn.classList.add("is-toggled");
  }
}

function turnBtnOff() {
  const previousButton = document.querySelector('is-toggled');

  if (previousButton) {
    btn.classList.remove('is-toggled')
  }
}