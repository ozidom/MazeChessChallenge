// Global Vars
let startTime;
let currentPiece;
let currentLocation;
let previousLocation;
let isTrainingRoom;
let isGameStarted = false;  
let moveCount = 0;
let dateBoardSelect = null;
let username;

// Game images
let kingImage = "♚";
let rookImage = "♜";
let knightImage = "♞";
let bishopImage = "♝";
let goldImage = "💰";

// Define an array of available pieces
const pieces = [kingImage   , rookImage, knightImage, bishopImage];
let usedPieces = [];
let gold = [];
let goldCollected = [];

// Define an array to store blocked spaces
let blockedSpaces = [];

// Function to create the game
function initGame(level) {
    document.getElementById("inputText").innerHTML = TEXT_CONSTANTS.game.text;
    document.getElementById("userName").innerHTML = "Name: " + username;

    goldCollected = [];
    
    currentLocation = "A1";
    if (isTrainingRoom){

        document.getElementById("chessboard").value = "";
        blockedSpaces = generateBlockedSpaces(level); // Call generateBlockedSpaces() before generating the chessboard
    }
        else {
        document.getElementById("chessboard").value = "";
        if (isGameStarted)
            loadBlockedSpaces();
    }
    
    generateChessboard(); // Generate the chessboard after generating blocked spaces
    const textarea = document.getElementById('inputText');
    startTime = new Date(); 
}

// Function to check if a space is blocked
function isBlocked(space) {
    return blockedSpaces.some(blockedSpace => blockedSpace.space === space && blockedSpace.type != "GOLD");
}

// Function to check if the path between two spaces is clear
function isPathClear(current, destination) {
    let path = [];
    let currentCol = current.charCodeAt(0);
    let currentRow = parseInt(current[1]);
    let destCol = destination.charCodeAt(0);
    let destRow = parseInt(destination[1]);

    if (currentCol === destCol) {
        // Vertical movement
        let minRow = Math.min(currentRow, destRow);
        let maxRow = Math.max(currentRow, destRow);
        for (let row = minRow + 1; row < maxRow; row++) {
            let pos = String.fromCharCode(currentCol) + row;
            if (isBlocked(pos)) {
                return false; // Blocked space encountered
            }
            path.push(pos);
        }
    } else if (currentRow === destRow) {
        // Horizontal movement
        let minCol = Math.min(currentCol, destCol);
        let maxCol = Math.max(currentCol, destCol);
        for (let col = minCol + 1; col < maxCol; col++) {
            let pos = String.fromCharCode(col) + currentRow;
            if (isBlocked(pos)) {
                return false; // Blocked space encountered
            }
            path.push(pos);
        }
    } else if (Math.abs(destCol - currentCol) === Math.abs(destRow - currentRow)) {
        // Diagonal movement
        let colStep = destCol > currentCol ? 1 : -1;
        let rowStep = destRow > currentRow ? 1 : -1;
        let col = currentCol + colStep;
        let row = currentRow + rowStep;
        while (col !== destCol && row !== destRow) {
            let pos = String.fromCharCode(col) + row;
            if (isBlocked(pos)) {
                return false; // Blocked space encountered
            }
            path.push(pos);
            col += colStep;
            row += rowStep;
        }
    } else {
        return false; // Invalid move for this piece
    }
    return true; // Path is clear
}


// Function to load the bloacked space into an array
function loadBlockedSpaces() {
    blockedSpaces = []; 
    const chessboardConfig = new ChessboardBlockedSpaces();
    const today = getTodayDateUTC(); // You can replace this with dynamic date logic if needed
    const rawSpaces = chessboardConfig.getBoardByDate(today);
    if (rawSpaces.length > 0) {
        for(var blockedSpace of rawSpaces)
        {
            var coord = blockedSpace.split('');
            blockedSpaces.push({ space: `${coord[0]}${coord[1]}`, type: 'LAVA' });
        }
    } 
    else {
        //alertText("No blocked squares for today's date.");
    }   

    const rawGold = chessboardConfig.getGoldByDate(today);
    if (rawGold.length > 0) {
        for(var goldSpace of rawGold)
        {
            var coord = goldSpace.split('');
            var goldItem = `${coord[0]}${coord[1]}`;
            blockedSpaces.push({ space: goldItem , type: 'GOLD' });
            gold.push(goldItem);
        }
    } 
    else {
       // alertText("No gold squares for today's date.");
    }  
}

// Function to parse the chessboard file (chessboards.js) and return blocked squares for the current date
function parseChessboardFile(content, date) {
    const lines = content.split('\n');
    for (const line of lines) {
        const [lineDate, squares] = line.split(':');
        if (lineDate.trim() === date) {
            return squares.trim().split(','); // Return the blocked squares for today
        }
    }
    return []; // No match for the date
}

function loadComplexPath() {
    const path = []; // Array to hold the path items
    const pieces = [new Knight(), new Rook(), new Bishop(), new King()];

    // Shuffle the pieces to ensure random usage order
    const shuffledPieces = pieces.sort(() => Math.random() - 0.5);
    
    let currentX = 0; // Starting column (A)
    let currentY = 0; // Starting row (1)

    // Start the path with the initial position A1
    path.push({ space: "A1"});

    // Generate the path by using each piece in shuffled order
    for (const piece of shuffledPieces) {
        let pieceUsed = false;
        
        // Attempt to find a valid move for the current piece
        for (let attempts = 0; attempts < 10; attempts++) {
            // Generate potential moves for the current piece
            const possibleMoves = [];

            for (let col = 0; col < 8; col++) {
                for (let row = 0; row < 8; row++) {
                    const destination = `${String.fromCharCode(65 + col)}${row + 1}`; // Convert to chess notation
                    if (piece.isValidMove(`${String.fromCharCode(65 + currentX)}${currentY + 1}`, destination)) {
                        possibleMoves.push(destination);
                    }
                }
            }

            if (possibleMoves.length > 0) {
                // Randomly select a valid move
                const selectedMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
                //const type = Math.random() < 0.5 ? 'LAVA' : 'WATER';

                // Add move to path
                path.push({ space: selectedMove});
                
                // Update current position
                currentX = selectedMove.charCodeAt(0) - 65; // Update column index
                currentY = parseInt(selectedMove[1]) - 1; // Update row index

                pieceUsed = true;
                break; // Exit the attempt loop after successfully using the piece
            }
        }

        // If the piece was not used successfully, exit the loop
        if (!pieceUsed) {
            console.error(`Could not use piece: ${piece.constructor.name}`);
            break;
        }
    }

    // Ensure the last move is to H8
    if (!path.some(item => item.space === "H8")) {
        path.push({ space: "H8"});
    }

    return path; // Return the generated complex path
}

// TODO DELETE - Old Function to generate random blocked spaces with types (LAVA, Water, etc.)
function generateBlockedSpaces(level) {
    blockedSpaces = []; // Reset blocked spaces array
    var path = [];
    var hardness = level*14;

    path = loadComplexPath(level);

    for (let i = 0; i < hardness; i++) {
        let x = String.fromCharCode(65 + Math.floor(Math.random() * 8)); // Random letter from 'a' to 'h'
        let y = Math.floor(Math.random() * 8) + 1; // Random number from 1 to 8
        let type = Math.random() < 0.5 ? 'LAVA' : 'Water'; // Randomly assign type
        var item = { space: `${x}${y}`, type: type };
        var location = { space: `${x}${y}`};
        if (!(x=="H" && y==8) && !(x=="A" && y==1) && !path.includes(location)) {          
            blockedSpaces.push(item);
        }
    }

    //randomly create the gold
    var goldSpaces = (level*3);
    for (let i = 0; i < goldSpaces; i++) {
        let x = String.fromCharCode(65 + Math.floor(Math.random() * 8)); // Random letter from 'a' to 'h'
        let y = Math.floor(Math.random() * 8) + 1; // Random number from 1 to 8
        var item = { space: `${x}${y}`, type: 'GOLD'};
        if (!(x=="H" && y==8) && !(x=="A" && y==1) && !blockedSpaces.includes(location))
        {
            blockedSpaces.push(item);
        }
    }


    return blockedSpaces; // Return the generated blocked spaces
}

// Function to generate chessboard
function generateChessboard() {
    const chessboard = document.getElementById('chessboard');
    chessboard.innerHTML = "";
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    for (let row = 8; row >= 1; row--) {  // Row from 8 to 1 (bottom to top)
      for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        const alphaCoords = columns[col]+row;
        square.className = (row + col) % 2 === 0 ? 'white' : 'black';
        square.setAttribute('id', alphaCoords);
        square.setAttribute('data-column', columns[col]);
        square.setAttribute('data-row', row);  // Row from 1 to 8
        
        // Apply styling for blocked spaces based on type
        let spaceType = getSpaceType(alphaCoords);
        if (spaceType) {
            if (spaceType == 'Water')  {
                square.className = "blue";
            } 
            else if (spaceType == 'LAVA') {
                square.className =  "red";
            }
            else if (spaceType == 'GOLD') {
                square.className =  "gold";
            }
        }

        //create the labels
        if (row===8 && col===7) {
            square.textContent = "🏁";
        }

        if (row===1 && col===0) {
            square.textContent = "🚩";
        }
        square.addEventListener('click', handleClick);
        chessboard.appendChild(square);
      }
    }
  }
  
  // Function to handle any clicks on the chessboard
  function handleClick(event) {
    const column = event.target.getAttribute('data-column');
    const row = event.target.getAttribute('data-row');
    const textarea = document.getElementById('inputText');
    textarea.value = `You clicked on: ${column}${row}`;

    var position =`${column}${row}`;
    movePiece(position);
  }

// Function to determine space type (blocked or not)
function getSpaceType(position) {
    // You can adjust this function to return different types based on your requirements
    let blockedSpace = blockedSpaces.find(space => space.space === position);
    return blockedSpace ? blockedSpace.type : null;
}

// Function to display the modal when the game is over
function showModal(message) {
    document.getElementById("modalMessage").innerHTML = message;
    document.getElementById("gameOverModal").style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    document.getElementById("gameOverModal").style.display = "none"; // Hide the modal
}

// Function to restart the game
function restartGame() {
    closeModal(); // Close the modal
    location.reload(); // Reload the page to restart the game
}

// Function to move a piece
function movePiece(location) {
    let current = currentLocation;
    let destination = location;
    var messages = "";
    // Validate inputs
    if (!isValidInput(current) || !isValidInput(destination)) {
        alertText("Invalid input. Please enter valid coordinates (e.g., A1).");
        return;
    }

    // Check if destination is blocked
    if (isBlocked(destination)) {
        alertText("Destination is blocked. Choose another destination.");
        return;`    `
    }

    let pieceName = document.getElementById(current).textContent;
   
    // Validate move based on piece type
    let piece;
    switch (pieceName) {
        case kingImage:
            piece = new King();
            break;
        case rookImage:
            piece = new Rook();
            break;
        case knightImage:
            piece = new Knight();
            break;
        case bishopImage:
            piece = new Bishop();
            break;
        default:
            alertText("Invalid piece.");
            return;
    }

    if (!piece.isValidMove(current, destination)) {
        alertText("Invalid move for the selected piece. You are at " + destination);
        return;
    }

    // Update destination cell with piece
    document.getElementById(destination).textContent = pieceName;
    currentLocation = destination;
    moveCount++;
    //piece.moveCount++;

    //check if we can collected gold and haven't collected it from this location before
    if (gold.includes(currentLocation) && !goldCollected.includes(currentLocation)) {
        goldCollected.push(currentLocation);
        messages += " Gold collected";
    }

    if (destination=='H8' && (gold.length > goldCollected.length)) {
        alertText("You have not collected all the gold");
        return;
    }

    if (destination=='H8' && (gold.length == goldCollected.length)) {
        let endTime = new Date();
        let completionTime = (endTime - startTime) / 1000; // Time in seconds
        //alertText("🏆🏆🏆You have won in " + moveCount + " moves and in " + completionTime + "seconds 🏆🏆🏆. Reload page to play again or try out a training room.");
        showModal(`🏆 You have won in ${moveCount} moves and in ${completionTime} seconds! 🏆`);
        if (!isTrainingRoom) {
            submitHighScore(username, moveCount, completionTime); //TODO eventually we will only call this when the score is better than the highest scores
        }
        isGameStarted = false;
        moveCount = 0;
        blockedSpaces =  [];
        usedPieces = [];
    }
    else {
        alertText('Move to ' + destination + ',count ' + moveCount + messages);
    }
}

// Function to validate input coordinates
function isValidInput(input) {
    return /^[A-H][1-8]$/.test(input);
}

// Function to get the element from the dom by location on the board
function getElementByLocation(location) {
    const column = location.charAt(0).toUpperCase(); // Extract column letter, capitalize to match data-column
    const row = location.charAt(1); // Extract row number
    
    // Query selector to find the element with matching data attributes
    return document.querySelector(`[data-column="${column}"][data-row="${row}"]`);
  }

// Function to select King
function selectKing() {
    selectPiece(kingImage);
}

// Function to select Rook
function selectRook() {
    selectPiece(rookImage);
}

// Function to select Knight
function selectKnight() {
    selectPiece(knightImage);
}

// Function to select Bishop
function selectBishop() {
    selectPiece(bishopImage);
}

// Function to select Piece
function selectPiece(pieceImage) {
        if (moveCount>0){
            moveCount++;//only incerement after they have made there first move
            alertText('Move count ' + moveCount);
        }
        usedPieces.push(pieceImage);
        currentPiece = pieceImage;
        document.getElementById(currentLocation).textContent = currentPiece;
}

// Function to display alert text
function alertText(textBody){
    const textarea = document.getElementById('inputText');
    textarea.innerHTML = textBody;
}

// Function to start the game
function startGame() {
    usedPieces = [];
    if (isTrainingRoom)
    {
        isTrainingRoom = false;
        initGame(0);
    }
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('content').style.display = 'none'; 
    isGameStarted = true;
    document.getElementById('sponsors').style.display = 'block'; 
    document.getElementById('sponsors').innerHTML = TEXT_CONSTANTS.sponsor.text;
    initGame(0);
}

// Function to handle the training grounds level buttons
function btnTrainingGrounds() {
    document.getElementById("training-grounds-row").style.display = true;
}

// Function to create the chessboard
function createChessboard() {
    const chessboard = document.getElementById('chessboard');
    const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    
    for (let row = 7; row >= 0; row--) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.className = (row + col) % 2 === 0 ? 'white' : 'black';
        chessboard.appendChild(square);
      }
    }
  }

// Function to handle the training ground buttons
function btnTG(level){
    moveCount = 0;
    blockedSpaces =  [];
    usedPieces = [];
    isTrainingRoom = true;
    initGame(level); 
}

  // Event listener for the onload event
      document.addEventListener('DOMContentLoaded', function() {
        isGameStarted = false;
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        if (url.search) {
            const params = new URLSearchParams(url.search);
            dateBoardSelect = params.get('date')
        } 
        fetchHighScores();
        username = getUsername();
        isTrainingRoom = false;
        initGame(0); // Call init when DOM is ready   
  });