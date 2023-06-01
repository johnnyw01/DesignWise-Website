window.onload = () => {
  // Executes the code inside the function after the page has finished loading
  setTimeout(() => {
    // Adds the "display" class to the <body> element after a delay of 4000 milliseconds (4 seconds)
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  // Adds a click event listener to the element with class "hamburger-menu"
  document.querySelector(".container").classList.toggle("change");
  // Toggles the "change" class on the element with class "container" when the hamburger menu is clicked
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  // Selects all <a> elements with href attribute starting with "#"
  anchor.addEventListener('click', function (e) {
    // Adds a click event listener to each matched <a> element
    e.preventDefault();

    // Check if the href is "#"
    if (this.getAttribute('href') === "#") {
      // Scrolls to the top of the page smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Scrolls to the element specified by the href attribute smoothly
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
