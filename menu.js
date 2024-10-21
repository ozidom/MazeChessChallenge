 // Function to show the "Home" content
function showHome() {
    if (!isGameStarted)
        document.getElementById('startScreen').style.display = 'flex';
    else    
        document.getElementById('startScreen').style.display = 'none';
    document.getElementById("training-grounds-row").style.display = 'none';
    document.getElementById('inputText').style.display = 'flex'; // Show chessboard area
    document.getElementById('button-box').style.display = 'grid'; // Show chessboard area
    document.getElementById('chessboard').style.display = 'grid'; // Show chessboard
    document.getElementById('content').style.display = 'none'; // Hide dynamic content
}

// Function to show the "Help" section
function showHelp() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.help.text;
    contentDiv.style.display = 'block';
    //document.getElementById("startScreen").style.visibility = !isGameStarted;
}
// Function to show the "Y" section
function showWhy() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.about.text;
    contentDiv.style.display = 'block';
}

// Function to show the "Support" section
function showSupport() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.support.text;
    contentDiv.style.display = 'block';
}

// Function to show the "Contact" section
function showContact() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.contact.text;
    contentDiv.style.display = 'block';
}

// Function to show the training grounds
function showTrainingGrounds() {
    if (!isGameStarted) {
        document.getElementById('inputText').style.display = 'flex'; // Show chessboard area
        document.getElementById('button-box').style.display = 'grid'; // Show chessboard area
        document.getElementById('chessboard').style.display = 'grid'; // Show chessboard
        document.getElementById('content').style.display = 'none'; // Hide dynamic content
        document.getElementById("startScreen").style.display = 'none';
        document.getElementById("training-grounds-row").style.display = 'flex';
        if (!isTrainingRoom)
        {
            isTrainingRoom = true;
            btnTG(1);
        }
    }
    else
    {
        alertText("You can't start a training ground while you are playing a game. Refresh the page to start again.");
    }
}

// Helper function to hide the game area
function hideGameArea() {
    document.getElementById("inputText").style.display = 'none';
    document.getElementById("training-grounds-row").style.display = 'none';
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('chessboard').style.display = 'none'; // Hide chessboard
    document.getElementById('button-box').style.display = 'none'; // Hide chessboard
}