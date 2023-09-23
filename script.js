document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const message = document.getElementById('message');
    const error = document.getElementById('error');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const conformPassword =document.getElementById('Conform-password').value
         
        if(password!=conformPassword){
            error.textContent = 'Check your Password ';
        }
        else{
            error.style.display = 'none'
            // Generate a random access token (for demonstration purposes)
        const accessToken = Math.random().toString(36).substring(2, 18);

        // Store user data in local storage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

        // Display success message
        message.textContent = 'Signup successful! Redirecting to profile...';

        // Redirect to profile page
        setTimeout(function() {
            window.location.href = 'profile.html';
        }, 2000); // Redirect after 2 seconds
        }
        
    });
});
