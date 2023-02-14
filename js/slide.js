leftButton.addEventListener("click", slideToRight);

rightButton.addEventListener("click", slideToLeft);

function slideToLeft() {
  for (const [i, img] of imagenes.entries()) {
    if (img.src === imagenesLight.src) {
      let nextPos = i != imagenes.length - 1 ? i + 1 : 0;

      imagenesLight.src = imagenes[nextPos].src;

      break;
    }
  }
}

function slideToRight() {
  for (const [i, img] of imagenes.entries()) {
    if (img.src === imagenesLight.src) {
      let nextPos = i != 0 ? i - 1 : imagenes.length - 1;

      imagenesLight.src = imagenes[nextPos].src;

      break;
    }
  }
}
