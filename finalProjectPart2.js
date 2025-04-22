// Initial rating value
let initialRating = parseFloat(document.getElementById('ratingDisplay').innerHTML); // Original rating of the game
let reviewsCount = 1;   // Start with 1 review for the initial rating
let totalRating = initialRating; // Total rating starts with the initial rating

function reviewSubmission() {
    const username = document.getElementById('username').value;
    const userRating = parseFloat(document.getElementById('userRating').value);
    const userReview = document.getElementById('userReview').value;

    if (!username || isNaN(userRating) || userRating < 0 || userRating > 100 || !userReview) {
        alert('Please fill out all fields with valid information.');
        return;
    }

    // Add the new rating to the total rating
    totalRating += userRating;
    reviewsCount++; // Increase the review count

    // Update the average rating display
    const averageRating = (totalRating / reviewsCount).toFixed(1); // Keep one decimal
    document.getElementById('ratingDisplay').innerHTML = averageRating;

    // Create new review elements
    const reviewContainer = document.createElement('div');
    reviewContainer.className = 'userReview';

    const usernameElement = document.createElement('h3');
    usernameElement.innerHTML = `${username} (Rating: ${userRating})`;

    const reviewElement = document.createElement('p');
    reviewElement.innerHTML = userReview;

    // Append the new review to the user reviews container
    reviewContainer.appendChild(usernameElement);
    reviewContainer.appendChild(reviewElement);
    document.getElementById('userReviewsContainer').appendChild(reviewContainer);

    // Clear the form
    document.getElementById('userReviewForm').reset();
};


// Removes the review submission to not clutter the webpage
function reviewFormVisibilityToggle() {
    const reviewForm = document.querySelector('.reviewForm');
    reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none';
}