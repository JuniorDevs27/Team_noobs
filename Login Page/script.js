function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    

    // Redirect user to landing page
    window.location.href = "https://sagniktunes.netlify.app/"; // Replace with your actual landing page URL
}
