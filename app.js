// document.addEventListener("DOMContentLoaded", function () {
//   const headerDropdown = document.querySelector(".header-dropdown");
//   const headerLinksFirst = document.querySelector(".header-links--first");

//   headerLinksFirst.addEventListener("click", function (e) {
//     e.stopPropagation(); // Prevent click event from bubbling up to document

//     headerDropdown.style.display = "block";
//   });

//   document.addEventListener("click", function () {
//     headerDropdown.style.display = "none";
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const headerDropdown = document.querySelector(".header-dropdown");
  const headerLinksContainer = document.querySelector(".header-links");

  headerLinksContainer.addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("header-links--first")) {
      event.stopPropagation();
      headerDropdown.style.display = "block";
    } else {
      headerDropdown.style.display = "none";
    }
  });

  document.addEventListener("click", function () {
    headerDropdown.style.display = "none";
  });
});
