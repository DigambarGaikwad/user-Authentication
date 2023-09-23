document.addEventListener('DOMContentLoaded', function() {
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const accessToken = document.getElementById('access-token');
    const password = document.getElementById('password');
    const logoutButton = document.getElementById('logout-button');

    // Check if the user is logged in (access token exists in local storage)
    const storedAccessToken = localStorage.getItem('accessToken');

    if (!storedAccessToken) {
        // If the access token is not present, redirect to the signup page
        window.location.href = 'signup.html';
    } else {
        // Populate profile information from local storage
        const name = localStorage.getItem('name');
        const userEmail = localStorage.getItem('email');
        
        fullName.textContent = name;
        email.textContent = userEmail;
        accessToken.textContent = storedAccessToken;
    }

    // Logout functionality
    logoutButton.addEventListener('click', function() {
        // Clear local storage
        localStorage.clear();
        // Redirect to the signup page
        window.location.href = 'index.html';
    });
});
