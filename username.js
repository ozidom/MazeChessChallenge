// username.js

// Array of comedic first names
const firstNames = ["Buster", "Shorty", "T-bone", "Cutie", "Speedy", "Giggles", "Spunky", "Jellybean", "Wheezy", "Doodles",
    "Blinky", "Pip", "Dizzy", "Noodles", "Scrappy", "Snickers", "Waffles", "Twitchy", "Sparky", "Chippy"];

// Array of comedic surnames
const surnames = ["McFizz", "Wigglesworth", "Pickles", "Tickleface",
  "Snugglepaws", "Jellyroll", "Dinglehopper", "Bumblefoot", "Wobbletoes", "Fizzlesnort", 
  "Bopadoo", "Twinkles", "Sneezywhistle", "Fuzzbucket", "Gigglesnuff"];

  const encodedWords = "WyJmdWNrIiwgImN1bnQiLCAiYXJzZWhvbGUiLCAic2hpdCJd";

  // Decode it when needed
  function decodeWords(encoded) {
      return JSON.parse(atob(encoded));
  }

function containsInappropriateWords(input) {
  const inappropriateWords = decodeWords(encodedWords);
  const lowerInput = input.toLowerCase();
  return inappropriateWords.some(word => lowerInput.includes(word));
}

function sanitizeInput(input) {
  const sanitized = input.replace(/[<>/'"]/g, ''); // Remove potentially harmful characters
  return sanitized;
}

function validateUsername(input) {
    const sanitized = sanitizeInput(input);
    if (containsInappropriateWords(sanitized)) {
        //alert("Username contains inappropriate content.");
        return false;
    }
    return true;
}

// Function to set a random username if none exists in local storage
function setRandomUsername() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  const randomNumber = Math.floor(Math.random() * 99999) + 1;
  const randomUsername = `${randomFirstName}_${randomSurname}_${randomNumber}`;
  localStorage.setItem('username', randomUsername);
  return randomUsername;
}

// Function to get the username from local storage, or generate one if not found
function getUsername() {
  let username = localStorage.getItem('username');

  if (!username) {
  username = setRandomUsername();
  }
  return username;
}

// Function to set a specific username to local storage
function setUsername(username) {
  if (validateUsername(username)) {
    localStorage.setItem('username', username);
    return true;
  }
  return false;
}