
import {jwtDecode} from 'jwt-decode';

// Function to refresh the JWT token
async function refreshJwtToken() {

    let yourCurrentToken = ' ' ;

    try {
        // Make an API request to your server to refresh the token
        const response = await fetch('/api/refresh-token', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${yourCurrentToken}`,
                'Content-Type': 'application/json',
            },
            // Add any additional data required for token refresh
            // body: JSON.stringify({ /* ... */ }),
        });

        if (response.ok) {
            // If the refresh is successful, update your current token
            const newToken = await response.json();
            yourCurrentToken = newToken.access_token;

            // Optionally, update the stored token in localStorage or a secure cookie
            localStorage.setItem('jwtToken', yourCurrentToken);

            return yourCurrentToken;
        } else {
            // Handle the case where the refresh request fails
            console.error('Token refresh failed');
            return null;
        }
    } catch (error) {
        console.error('Error during token refresh', error);
        return null;
    }
}



// Function to check if the JWT token is expired
function isTokenExpired(token) {

    if (!token) {
        return true;
    }

    const decodedToken = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds

    return decodedToken.exp < currentTime;
}
(adjust as needed)

// Function to clear the token refresh timeout


// Function to handle user inactivity
function handleUserInactivity() {
    console.log('User inactive. Logging out...');
    // Perform logout actions, such as clearing the token, redirecting, etc.
    // For simplicity, let's clear the token and reload the page in this example.
    // localStorage.removeItem('jwtToken');
    window.location.reload();
}

// Function to reset the token refresh timeout


// Function to handle token expiration
async function handleTokenExpiration() {

    const storedToken = localStorage.getItem('jwtToken');

    if (isTokenExpired(storedToken)) {
        // Token is expired, attempt to refresh
        const refreshedToken = await refreshJwtToken();

        if (refreshedToken) {
            // Use the refreshed token for subsequent requests
            console.log('Token refreshed successfully');
        } else {
            // Handle the case where token refresh failed or user needs to log in
            console.log('Token refresh failed or user needs to log in');
            handleUserInactivity();
            return;
        }
    } else {
        // Token is still valid, reset the token refresh timeout
        resetTokenRefreshTimeout();
        console.log('Token is still valid');
    }
}

// Event listener for user activity
document.addEventListener('mousemove', resetTokenRefreshTimeout);
document.addEventListener('keydown', resetTokenRefreshTimeout);



