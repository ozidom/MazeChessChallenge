// Mazechess.js

// Global Vars
let startTime;
let currentPiece;
let currentLocation;
let previousLocation;
let isTrainingRoom;
let isGameStarted = false;  
let moveCount = 0;
let dateBoardSelect = null;

// Game images
let kingImage = "♚";
let rookImage = "♜";
let knightImage = "♞";
let bishopImage = "♝";


// Define an array of available pieces
const pieces = [kingImage   , rookImage, knightImage, bishopImage];

// Define an array to store blocked spaces
let blockedSpaces = [];

// Define classes for each piece
class Piece {
    constructor(name) {
        this.name = name;
        this.moveCount = 0;
    }

    isValidMove(current, destination) {
        // Default implementation for generic piece
        return true;
    }
}

// Function to get the date from the browser but this can be overwritten by a querysting in the form of
// ?date=2024-10-01 ie 1st of October 
function getTodayDate() {
    var today = new Date();

    // if the query string has a valid date then use that
    if (dateBoardSelect !== null){
        today = new Date(dateBoardSelect);
    }
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so +1
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format: YYYY-MM-DD
}

// Function to create the game
function initGame(level) {
    document.getElementById("inputText").innerHTML = GAME_TEXT;
    
    currentLocation = "A1";
    if (isTrainingRoom){

        document.getElementById("chessboard").value = "";
        generateBlockedSpaces(level); // Call generateBlockedSpaces() before generating the chessboard
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
    return blockedSpaces.some(blockedSpace => blockedSpace.space === space);
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

// Class to implement King
class King extends Piece {
    isValidMove(current, destination) {
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        return dx <= 1 && dy <= 1;
    }
}

// Class to implement Rook
class Rook extends Piece {
    isValidMove(current, destination) {
        // Rook can move horizontally or vertically
        let isStraightMove = current[0] === destination[0] || current[1] === destination[1];
        return isStraightMove && isPathClear(current, destination);
    }
}

// Class to implement Knight
class Knight extends Piece {
    isValidMove(current, destination) {
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}

// Class to implement Bishop
class Bishop extends Piece {
    isValidMove(current, destination) {
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        let isDiagonalMove = dx === dy;
        return isDiagonalMove && isPathClear(current, destination);
    }
}
// Function to load the bloacked space into an array
function loadBlockedSpaces() {
    blockedSpaces = []; 
    const chessboardConfig = new ChessboardBlockedSpaces();
    const today = getTodayDate(); // You can replace this with dynamic date logic if needed
    const rawSpaces = chessboardConfig.getBoardByDate(today);
    if (rawSpaces.length > 0) {
        for(var blockedSpace of rawSpaces)
        {
            var coord = blockedSpace.split('');
            blockedSpaces.push({ space: `${coord[0]}${coord[1]}`, type: 'LAVA' });
        }
    } 
    else {
        alertText("No blocked squares for today's date.");
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

// Function to generate random blocked spaces with types (LAVA, Water, etc.)
function generateBlockedSpaces(level) {
    blockedSpaces = []; // Reset blocked spaces array
    var hardness = level*20;
    if (level==4)
        hardness += 20;

    for (let i = 0; i < hardness; i++) {
        let x = String.fromCharCode(65 + Math.floor(Math.random() * 8)); // Random letter from 'a' to 'h'
        let y = Math.floor(Math.random() * 8) + 1; // Random number from 1 to 8
        if (!(x=="H" && y==8) && !(x=="A" && y==1)){
            let type = Math.random() < 0.5 ? 'LAVA' : 'Water'; // Randomly assign type
            blockedSpaces.push({ space: `${x}${y}`, type: type });
        }
    }
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
    moveCount++;
  }

// Function to determine space type (blocked or not)
function getSpaceType(position) {
    // You can adjust this function to return different types based on your requirements
    let blockedSpace = blockedSpaces.find(space => space.space === position);
    return blockedSpace ? blockedSpace.type : null;
}

// Function to move a piece
function movePiece(location) {
    let current = currentLocation;
    let destination = location;
   
    // Validate inputs
    if (!isValidInput(current) || !isValidInput(destination)) {
        alertText("Invalid input. Please enter valid coordinates (e.g., A1).");
        return;
    }

    // Check if destination is blocked
    if (isBlocked(destination)) {
        alertText("Destination is blocked. Choose another destination.");
        return;
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
        alertText("Invalid move for the selected piece.");
        return;
    }

    // Update destination cell with piece
    document.getElementById(destination).textContent = pieceName;
    currentLocation = destination;
    piece.moveCount++;

    if (destination=='H8') {
        let endTime = new Date();
        let completionTime = (endTime - startTime) / 1000; // Time in seconds
        alertText("🏆🏆🏆You have won in " + moveCount + " moves and in " + completionTime + "seconds 🏆🏆🏆. Reload page to play again or try out a training room.");
        isGameStarted = false;
        moveCount = 0;
        blockedSpaces =  [];
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
    moveCount++;
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
    if (isTrainingRoom)
    {
        isTrainingRoom = false;
        initGame(0);
    }
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('content').style.display = 'none'; 
    isGameStarted = true;
    document.getElementById('sponsors').style.display = 'block'; 
    document.getElementById('sponsors').innerHTML = SPONSOR_TEXT;
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

// Function to copy the board to chessboard
function copyChessboardToClipboard() {
    const chessboardElement = document.getElementById('chessboardcontainer');

    // Use html2canvas to convert the chessboard div to a canvas
    html2canvas(chessboardElement).then(canvas => {
        canvas.toBlob(blob => {
            if (blob) {
                const item = new ClipboardItem({ 'image/png': blob });
                navigator.clipboard.write([item]).then(() => {
                    alertText('Chessboard copied to clipboard as an image!');
                }).catch(err => {
                    console.error('Error copying to clipboard: ', err);
                    fallbackCopyToClipboard(canvas.toDataURL()); // Fallback for mobile browsers
                });
            } else {
                console.error('Error creating blob from canvas');
            }
        });
    });
}

// Function to copy the board to chessboard for a mobile device if the method:copyChessboardToClipboard fails
function fallbackCopyToClipboard(dataUrl) {
    const tempLink = document.createElement('a');
    tempLink.href = dataUrl;
    tempLink.download = 'chessboard.png';
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    alertText('Chessboard copied to clipboard as an image! (Fallback method)');
}

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
    contentDiv.innerHTML = HELP_TEXT;
    contentDiv.style.display = 'block';
    //document.getElementById("startScreen").style.visibility = !isGameStarted;
}
// Function to show the "Y" section
function showWhy() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = WHY_TEXT;
    contentDiv.style.display = 'block';
}

// Function to show the "Support" section
function showSupport() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = HELP_US_TEXT;
    contentDiv.style.display = 'block';
}

// Function to show the "Contact" section
function showContact() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = CONTACT_TEXT;
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

// Function to handle the training ground buttons
function btnTG(level){
    moveCount = 0;
    blockedSpaces =  [];
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
        isTrainingRoom = false;
        initGame(0); // Call init when DOM is ready


        
  });

