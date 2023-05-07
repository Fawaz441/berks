export const setProgramsVisible = (shouldBeVisible = true) => {
  const selector = ".desktop-program-links";
  const links = document.querySelector(selector);
  if (links) {
    if (shouldBeVisible) {
      links.classList.add("visible");
    } else {
      links.classList.remove("visible");
    }
  }
};
