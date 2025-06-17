document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });
});


function typeWriterEffect(elementId, text, speed=100) {
    const element = document.getElementById(elementId); // Get the element with the ID "title-typewriter"
    element.innerHTML = ""; // Clear the element's content

    let index = 0; // Initialize the index to track the current character
    function type() {
        if(index < text.length) { // Check if there are more characters to type
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type,speed); // Call the type function again after the specified speed
        } else if(callback) { // If a callback function is provided, call it after typing is complete
            callback();
        }
    }
    type();
}

/* Using the typeWriterEffect function
document.addEventListener("DOMContentLoaded", function() {
    typeWriterEffect("title-typewriter", "Welcome to my portfolio website!");
});*/


document.addEventListener("DOMContentLoaded", function() {
    const texts = ["an undergraduate student", "an aspiring software engineer", "a tech enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100; // Speed of typing
    const deleteSpeed = 50; // Speed of deleting
    const waitTime = 1000; // Time to wait before starting to delete
    const waitBeforeNext = 500; // Time to wait before starting the next text

    function typing() {
        const id = document.getElementById("typed-text");
        const currentText = texts[textIndex];

        

        if (!isDeleting) {
            id.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex < currentText.length) {
                setTimeout(typing, speed);
            } else {
                if(textIndex === texts.length - 1) {
                    return; // Stop typing if it's the last text
                }
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(typing, waitTime);
                }, waitTime);
            }
        } else {
            id.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex > 0) {
                setTimeout(typing, deleteSpeed);
            } else {
                isDeleting = false;
                if (textIndex < texts.length - 1) {
                    textIndex++;
                    setTimeout(typing, speed);
                }
            }
        }
    }

    typing(); // Start the typing effect
});


// Function to handle the language scroll
// This function will automatically scroll the language container
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.lang-container');
    let scrollAmount = 0;
    const scrollStep = 1; // pixels per frame
    const scrollDelay = 40; // ms between frames

    function autoScroll() {
        if (!container) return;
        scrollAmount += scrollStep;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0; // Reset to start
        }
        container.scrollLeft = scrollAmount;
        setTimeout(autoScroll, scrollDelay);
    }

    autoScroll();
});