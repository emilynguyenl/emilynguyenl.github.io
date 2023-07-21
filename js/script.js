const sentences = [
    "nice to meet you!",
    "welcome to my portfolio :)",
    "my name is emily.",
    "i go to chapman university.",
    "i am interested in data & analytics.",
    "i am also a lover of puzzles and traveling."
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
  