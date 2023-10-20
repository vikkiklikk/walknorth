"use strict";
//# sourceMappingURL=index.js.map

console.log("working");

// Toggle hamburger menu

// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and the menu
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("dropdownMenu");
  const closeBtn = document.querySelector(".close");

  if (!menuBtn || !menu || !closeBtn) {
    // One of the elements couldn't be found, log an error for debugging
    console.error("One of the elements is missing:", {
      menuBtn,
      menu,
      closeBtn,
    });
    return; // Stop executing because elements are missing
  }

  // Define a function to toggle the menu's visibility
  const showHideMenu = () => {
    const isMenuVisible = menu.style.display === "block";
    menu.style.display = isMenuVisible ? "none" : "block";

    // If you want to use a class to control visibility, you can comment out the lines above
    // and use the line below, but you need to ensure the corresponding CSS is set.
    // menu.classList.toggle('scale-x-0');
  };

  // Attach the click event listener to the menu button
  menuBtn.addEventListener("click", function (event) {
    // Prevent this event from propagating up
    event.stopPropagation();
    // Toggle the menu's visibility
    showHideMenu();
  });

  // Close the menu if a click occurs outside of the menu
  document.addEventListener("click", function (event) {
    const isClickInside =
      menu.contains(event.target) || menuBtn.contains(event.target);

    if (!isClickInside) {
      menu.style.display = "none";
    }
  });

  // Attach the click event listener to the close button inside the menu
  closeBtn.addEventListener("click", function (event) {
    // Prevent this event from propagating up
    event.stopPropagation();
    // Hide the menu
    menu.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const favoriteButton = document.getElementById("favoriteButton");
  const emptyStar = document.getElementById("emptyStar");
  const filledStar = document.getElementById("filledStar");

  if (favoriteButton && emptyStar && filledStar) {
    favoriteButton.addEventListener("click", function () {
      // Check whether the filled star is currently displayed.
      const isFavorited = getComputedStyle(filledStar).display === "block";
      if (isFavorited) {
        // If the filled star is visible, hide it and show the empty star.
        filledStar.style.display = "none";
        emptyStar.style.display = "block";
      } else {
        // If the filled star is not visible (i.e., the empty star is visible), hide the empty star and show the filled star.
        filledStar.style.display = "block";
        emptyStar.style.display = "none";
      }
      // Here, you can also add code for any additional styling or functionality you want to trigger on this action.
    });
  } else {
    console.error("One or more elements were not found!");
  }

  // You can continue with other JavaScript code that needs to be executed after DOM content has loaded.
  // ...
}); // Closing the 'DOMContentLoaded' event listener here.

//cloud animation
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const opacity = 1 - scrollY / 500; // Adjust the value as needed

  document.querySelector(".cloud").style.opacity = opacity > 0 ? opacity : 0;
});

// Carousel

let span = document.getElementsByTagName("span");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

// mobile_view

let mob_view = window.matchMedia("(max-width: 768px)");

if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}

let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }

  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};

let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) {
      i.style.left = "-" + l + "%";
    }
  }
};

span[1].onclick = () => {
  right_mover();
};
span[0].onclick = () => {
  left_mover();
};

// Making the card a clickable link
function redirectToLink(link) {
  window.location.href = link;
}
