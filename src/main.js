









































































"use strict";
// Select the button based on its ID and specify it as an HTMLElement, which could be null
const favoriteButton = document.getElementById('favoriteButton');
// Proceed only if favoriteButton is not null (i.e., the element was successfully selected)
if (favoriteButton) {
    // Add a click event listener
    favoriteButton.addEventListener('click', () => {
        // The non-null assertion is used as favoriteButton is already checked for non-null
        // and TypeScript doesn't automatically infer that within this block it's still non-null
        const isFavorited = favoriteButton.textContent === '★';
        // Toggle the star state
        favoriteButton.textContent = isFavorited ? '☆' : '★'; // toggle between filled and outlined star
        // Add extra styles or classes as needed, for example, changing color
        favoriteButton.classList.toggle('text-yellow-500', !isFavorited); // fill the star if it's favorited
        // Here, you can also add code to handle this change, such as saving it to a backend or browser storage.
    });
}
else {
    // Handle the case where the 'favoriteButton' element was not found
    // This could be a console warning for debugging, or any other error handling method appropriate for your application
    console.warn("Element with ID 'favoriteButton' not found!");
}
