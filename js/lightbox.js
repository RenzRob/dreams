imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    showImage(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", ({ target }) => {
  if (
    target != imagenesLight &&
    (target != leftButton) & (target != rightButton) &&
    target != upButton &&
    target != downButton
  ) {
    contenedorLight.classList.toggle("show");

    imagenesLight.classList.toggle("showImage");

    leftButton.classList.toggle("hide");
    rightButton.classList.toggle("hide");
    upButton.classList.toggle("hide");
    downButton.classList.toggle("hide");

    hamburgerMenu.style.opacity = "1";
  }
});

const showImage = (path) => {
  imagenesLight.src = path;

  contenedorLight.classList.toggle("show");

  leftButton.classList.toggle("hide");
  rightButton.classList.toggle("hide");
  upButton.classList.toggle("hide");
  downButton.classList.toggle("hide");

  imagenesLight.classList.toggle("showImage");

  hamburgerMenu.style.opacity = "0";
};
