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
    document.getElementById('highscoresmoves').style.display = 'grid'; 
    document.getElementById('content').style.display = 'none'; // Hide dynamic content
    document.getElementById('MakeChessBoardDiv').style.display = 'none';
}

// Function to show the "Help" section
function showHelp() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.help.text;
    document.getElementById('content').style.display = 'grid';
    contentDiv.style.display = 'block';
    //document.getElementById("startScreen").style.visibility = !isGameStarted;
}
// Function to show the "Y" section
function showWhy() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById('MakeChessBoard').style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.about.text;
    contentDiv.style.display = 'block';
}

// Function to show the "Support" section
function showSupport() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById('MakeChessBoardDiv').style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.support.text;
    contentDiv.style.display = 'block';
}

// Function to show the "Contact" section
function showMake() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById('MakeChessBoardDiv').style.display = 'none';
    document.getElementById('content').style.display = 'none';
    //document.getElementById('MakeChessBoard').style.display = 'none';
     
    CreateMakerMap();
}

// Function to show the "Contact" section
function showSettings() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = TEXT_CONSTANTS.settings.text;
    contentDiv.style.display = 'block';

    // Safely hide MakeChessBoard if it exists
    const makeChessBoard = document.getElementById('MakeChessBoard');
    if (makeChessBoard) {
        makeChessBoard.style.display = 'none';
    }

    // Populate the input field with current username
    const currentUsername = getUsername();
    const usernameInput = document.getElementById('userNameInput');
    if (usernameInput) {
        usernameInput.value = currentUsername;
    }

    // Add event listeners for the buttons
    const randomBtn = document.getElementById('randomUsernameBtn');
    const saveBtn = document.getElementById('saveUsernameBtn');

    if (randomBtn) {
        randomBtn.addEventListener('click', generateRandomUsername);
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', saveUsername);
    }

    // Also allow saving with Enter key
    if (usernameInput) {
        usernameInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                saveUsername();
            }
        });
    }
}

function saveUsername() {
    const usernameInput = document.getElementById('userNameInput').value;
    //const userNameFeedback = document.getElementById('username-feedback');
       if (setUsername(usernameInput)) {
        document.getElementById("userName").innerHTML = "Name: " + usernameInput;
       }
        
}

function generateRandomUsername() {
    const randomUsername = setRandomUsername();
    document.getElementById('userNameInput').value = randomUsername;
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
        document.getElementById('highscoresmoves').style.display = 'none'; // Hide chessboard
        document.getElementById('MakeChessBoardDiv').style.display = 'none';
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
    document.getElementById('highscoresmoves').style.display = 'none'; // Hide chessboard
    document.getElementById('MakeChessBoardDiv').style.display = 'none';
}
