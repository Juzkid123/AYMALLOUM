// Function to show the AI Chatbot prompt
function showChatbotPrompt() {
  const chatbotPrompt = document.querySelector('.ai-chatbot');
  chatbotPrompt.style.display = 'block';  // Make chatbot visible

  // Optional: Automatically hide after 15 seconds
  setTimeout(() => {
      chatbotPrompt.style.display = 'none';
  }, 25000); // Chatbot will hide after 25 seconds
}

// Call the function every 60 seconds (60000 milliseconds)
setInterval(showChatbotPrompt, 60000); // Adjust the interval time as needed

// Optionally, show the chatbot once when the page loads
window.onload = function() {
  showChatbotPrompt();  // Shows the chatbot as soon as the page loads
};

// changes
let currentIndex = 0;
const images = document.querySelectorAll('.hero-images img');
const totalImages = images.length;

function changeImage() {
    images[currentIndex].classList.remove('active'); // Remove active class from current image
    currentIndex = (currentIndex + 1) % totalImages; // Move to the next image
    images[currentIndex].classList.add('active'); // Add active class to new image
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 5000);
