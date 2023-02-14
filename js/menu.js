hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

window.addEventListener("click", ({ target }) => {
  if (
    menu.classList.contains("spread") &&
    target != menu &&
    target != hamburgerMenu
  ) {
    menu.classList.toggle("spread");
  }
});
