document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to the Text Writing Animation!";
    const animatedText = document.getElementById("animated-text");

    let index = 0;

    function typeText() {
        if (index < text.length) {
            animatedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Typing speed
        } else {
            animatedText.style.borderRight = "none"; // Hide the cursor after typing is done
        }
    }

    typeText(); // Start typing animation
});
