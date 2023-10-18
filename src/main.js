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

// Wait for the DOM content to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and the menu
    const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('dropdownMenu');
    const closeBtn = document.querySelector('.close');

    if (!menuBtn || !menu || !closeBtn) {
        // One of the elements couldn't be found, log an error for debugging
        console.error('One of the elements is missing:', { menuBtn, menu, closeBtn });
        return; // Stop executing because elements are missing
    }

    // Define a function to toggle the menu's visibility
    const showHideMenu = () => {
        const isMenuVisible = menu.style.display === 'block';
        menu.style.display = isMenuVisible ? 'none' : 'block';

        // If you want to use a class to control visibility, you can comment out the lines above
        // and use the line below, but you need to ensure the corresponding CSS is set.
        // menu.classList.toggle('scale-x-0');
    };

    // Attach the click event listener to the menu button
    menuBtn.addEventListener('click', function(event) {
        // Prevent this event from propagating up
        event.stopPropagation();
        // Toggle the menu's visibility
        showHideMenu();
    });

    // Close the menu if a click occurs outside of the menu
    document.addEventListener('click', function(event) {
        const isClickInside = menu.contains(event.target) || menuBtn.contains(event.target);

        if (!isClickInside) {
            menu.style.display = 'none';
        }
    });

    // Attach the click event listener to the close button inside the menu
    closeBtn.addEventListener('click', function(event) {
        // Prevent this event from propagating up
        event.stopPropagation();
        // Hide the menu
        menu.style.display = 'none';
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
