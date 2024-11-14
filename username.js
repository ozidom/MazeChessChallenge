// username.js

// Array of comedic first names
const firstNames = ["Buster", "Shorty", "T-bone", "Cutie", "Speedy", "Giggles", "Spunky", "Jellybean", "Wheezy", "Doodles",
    "Blinky", "Pip", "Dizzy", "Noodles", "Scrappy", "Snickers", "Waffles", "Twitchy", "Sparky", "Chippy"];

// Array of comedic surnames
const surnames = ["McFizz", "Fluffybottom", "Wigglesworth", "Snickerdoodle", "Funklebottom", "Muffintop", "Pickles", "Tickleface",
  "Snugglepaws", "Jellyroll", "Dinglehopper", "Bumblefoot", "Wobbletoes", "Crumblesnatch", "Fizzlesnort", 
  "Bopadoo", "Twinklefist", "Sneezywhistle", "Fuzzbucket", "Gigglesnuff"];

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
  localStorage.setItem('username', username);
}