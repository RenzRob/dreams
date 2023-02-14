imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    showImage(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", ({ target }) => {
  if (
    target != imagenesLight &&
    (target != leftButton) & (target != rightButton)
  ) {
    contenedorLight.classList.toggle("show");

    imagenesLight.classList.toggle("showImage");

    hamburgerMenu.style.opacity = "1";
  }
});

const showImage = (path) => {
  imagenesLight.src = path;

  contenedorLight.classList.toggle("show");

  imagenesLight.classList.toggle("showImage");

  hamburgerMenu.style.opacity = "0";
};
