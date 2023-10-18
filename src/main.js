"use strict";
//# sourceMappingURL=index.js.map


// Carousel

const carousel = document.querySelector(".carousel");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let currentIndex = 0;

// Function to move the carousel to the specified index
function moveCarousel(index) {
    if (index < 0) {
        index = 0;
    } else if (index > 1) { // Adjust to the number of visible cards (3 in this case)
        index = 2;
    }
    const translateX = -index * 110; // Adjust the card width and margin

    carousel.style.transform = `translateX(${translateX}%)`;
    currentIndex = index;
}

prevButton.addEventListener("click", () => moveCarousel(currentIndex - 1));
nextButton.addEventListener("click", () => moveCarousel(currentIndex + 1));

// Toggle hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById("menuBtn");
    const dropdownMenu = document.querySelector("#dropdown-menu");

    menuBtn.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target) && event.target !== menuBtn) {
            dropdownMenu.style.display = "none";
        }
    });

    // Close the dropdown menu when clicking on the X button
    const closeBtn = document.querySelector(".close"); // if you use class, or use #closeBtn if you use ID
        closeBtn.addEventListener("click", function() {
            dropdownMenu.style.display = "none";
        });
});

"use strict";
const favoriteButton = document.getElementById('favoriteButton');
const emptyStar = document.getElementById('emptyStar');
const filledStar = document.getElementById('filledStar');
if (favoriteButton && emptyStar && filledStar) {
    favoriteButton.addEventListener('click', function () {
        // Check whether the filled star is currently displayed.
        const isFavorited = getComputedStyle(filledStar).display === "block";
        if (isFavorited) {
            // If the filled star is visible, hide it and show the empty star.
            filledStar.style.display = 'none';
            emptyStar.style.display = 'block';
        }
        else {
            // If the filled star is not visible (i.e., the empty star is visible), hide the empty star and show the filled star.
            filledStar.style.display = 'block';
            emptyStar.style.display = 'none';
        }
        // Here, you can also add code for any additional styling or functionality you want to trigger on this action.
    });
}
else {
    console.error('One or more elements were not found!');
}
