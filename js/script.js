// code for typing text on home page
const sentences = [
    "nice to meet you!",
    "welcome to my portfolio :)",
    "my name is emily.",
    "i am a chapman university alum.",
    "i am interested in data & analytics.",
    "i also love puzzles."
  ];
  
  const typingSpeed = 100;
  
  const typingTextElement = document.getElementById("typing-text");
  let sentenceIndex = 0;
  let charIndex = 0;
  
  function typeText() {
    if (charIndex < sentences[sentenceIndex].length) {
      typingTextElement.innerHTML += sentences[sentenceIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(deleteText, 1000); // Wait for 1 second before starting to delete
    }
  }
  
  function deleteText() {
    if (charIndex > 0) {
      typingTextElement.innerHTML = sentences[sentenceIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(deleteText, typingSpeed / 2); // Adjust the typing speed for deletion
    } else {
      sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to the next sentence
      setTimeout(typeText, typingSpeed / 2); // Wait for a brief pause before typing the next sentence
    }
  }

  // Start the typing effect when the page loads
  window.onload = typeText;