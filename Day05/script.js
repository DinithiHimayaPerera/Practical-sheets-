function displayGreeting() {
    // Get the current date and time
    const today = new Date();
    const curHr = today.getHours();

    let greeting;

    // Determine the greeting based on the hour
    if (curHr < 12) {
        greeting = "Good Morning";
    } else if (curHr < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    // Display the greeting message in the HTML element
    document.getElementById("greeting-message").textContent = greeting + "!";
}



