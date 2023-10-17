"use strict";
// First, we need to make sure that the elements are not just generic HTML elements, but more specifically, 
// they could be SVG elements or specific types of HTML elements like 'button' for better type assertions.
const favoriteButton = document.getElementById('favoriteButton');
const emptyStar = document.getElementById('emptyStar'); // 'SVGSVGElement' is used for SVG elements
const filledStar = document.getElementById('filledStar');
// Now we need to check if the elements are truthy. Since we're in TypeScript, we want to avoid 
// potential null references, hence the need for these checks.
if (favoriteButton && emptyStar && filledStar) {
    // Add a click event listener. The type of event and its handler are inferred so we don't need to explicitly declare them.
    favoriteButton.addEventListener('click', function () {
        // Determine the current state based on the visibility of the 'filledStar' SVG
        const isFavorited = filledStar.hasAttribute('hidden');
        // Toggle the star state
        if (isFavorited) {
            // If currently favorited, we show the empty star and hide the filled star
            filledStar.setAttribute('hidden', '');
            emptyStar.removeAttribute('hidden');
        }
        else {
            // If not currently favorited, we show the filled star and hide the empty star
            emptyStar.setAttribute('hidden', '');
            filledStar.removeAttribute('hidden');
        }
        // Add extra styles or classes as needed, for example, changing color
        // This could apply to the SVGs or perhaps a container element
        favoriteButton.classList.toggle('extra-styles', !isFavorited);
        // Here, you can also add code to handle this change, such as saving it to a backend or browser storage.
    });
}
else {
    console.error('SVG elements or button not found!');
}
