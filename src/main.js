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
