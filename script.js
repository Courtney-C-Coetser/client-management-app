// script.js

$(document).ready(function() {
    // Handle click event on user profile links
    $('.user-profile-link').click(function(e) {
        e.preventDefault();
        // Get the user's profile data from the database or API
        var userId = $(this).text(); // Assuming the user's name is used as the ID
        var userProfile = getUserProfile(userId); // Replace with your own function to fetch user profile data

        // Show the user's profile as a popout
        showUserProfilePopout(userProfile);
    });
});

function getUserProfile(userId) {
    // Function to fetch user profile data from the database or API
    // Replace with your own implementation
    // Return the user profile data
}

function showUserProfilePopout(userProfile) {
    // Function to display the user's profile as a popout
    // Use Bootstrap's modal component or any other popout library of your choice
    // Populate the modal with the user profile data
}