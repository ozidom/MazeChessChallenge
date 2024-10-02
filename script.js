// Global Vars
let startTime;
let currentPiece;
let currentLocation;
let previousLocation;
let isTrainingRoom;
let isGameStarted = false;  
let moveCount = 0;

// Game images
let kingImage = "♚";
let rookImage = "♜";
let knightImage = "♞";
let bishopImage = "♝";


// Define an array of available pieces
const pieces = ['♚', '♜', '♞', '♝'];

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

function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so +1
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`; // Format: YYYY-MM-DD
}

function initGame(level) {
    document.getElementById("inputText").innerHTML = GAME_TEXT;
    
    currentLocation = "A1";
    if (isTrainingRoom){

        document.getElementById("chessboard").value = "";
        generateBlockedSpaces(level); // Call generateBlockedSpaces() before generating the chessboard
    }
        else {
        document.getElementById("chessboard").value = "";
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

// Update piece classes to check for blocked spaces
class King extends Piece {
    isValidMove(current, destination) {
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        return dx <= 1 && dy <= 1;
    }
}

class Rook extends Piece {
    isValidMove(current, destination) {
        // Rook can move horizontally or vertically
        let isStraightMove = current[0] === destination[0] || current[1] === destination[1];
        return isStraightMove && isPathClear(current, destination);
    }
}

class Knight extends Piece {
    isValidMove(current, destination) {
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}

class Bishop extends Piece {
    isValidMove(current, destination) {
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        let isDiagonalMove = dx === dy;
        return isDiagonalMove && isPathClear(current, destination);
    }
}
//FUNCTIONS TO LOAD THE BLOCKED SPACES
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

// Parse the chessboard file and return blocked squares for the current date
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

  function handleClick(event) {
    const column = event.target.getAttribute('data-column');
    const row = event.target.getAttribute('data-row');
    const textarea = document.getElementById('inputText');
    textarea.value = `You clicked on: ${column}${row}`;

    var position =`${column}${row}`;
    movePiece(position);
    moveCount++;
  }

// Example function to determine space type (blocked or not)
function getSpaceType(position) {
    // You can adjust this function to return different types based on your requirements
    let blockedSpace = blockedSpaces.find(space => space.space === position);
    return blockedSpace ? blockedSpace.type : null;
}

// // Function to get the type of blocked space at a given position
// function getSpaceType(position) {
//     let space = blockedSpaces.find(blockedSpace => blockedSpace.space === position);
//     return space ? space.type : null;
// }

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

    // TODO : For a move involving multiple square lets mark them on the board
    //document.getElementById(current).textContent = ''; 
    //this should be set to the label of the cell not ''

    // Example: Update the chessboard
    //renderChessboard();

    if (destination=='H8') {
        let endTime = new Date();
        let completionTime = (endTime - startTime) / 1000; // Time in seconds
        alertText("🏆🏆🏆You have won in " + moveCount + "moves and in " + completionTime + "seconds 🏆🏆🏆. Reload page to play again or try out a training room.");
        isGameStarted = false;
        moveCount = 0;
        blockedSpaces =  [];
    }
}

// Function to validate input coordinates
function isValidInput(input) {
    return /^[A-H][1-8]$/.test(input);
}

function getElementByLocation(location) {
    const column = location.charAt(0).toUpperCase(); // Extract column letter, capitalize to match data-column
    const row = location.charAt(1); // Extract row number
    
    // Query selector to find the element with matching data attributes
    return document.querySelector(`[data-column="${column}"][data-row="${row}"]`);
  }

function selectKing() {
    moveCount++;
    currentPiece = kingImage;
    document.getElementById(currentLocation).textContent = currentPiece;
}

function selectRook() {
    moveCount++;
    currentPiece = rookImage;
    document.getElementById(currentLocation).textContent = currentPiece;
}

function selectKnight() {
    moveCount++;
    currentPiece =  knightImage;
    document.getElementById(currentLocation).textContent = currentPiece;
}

function selectBishop() {
    moveCount++;
    currentPiece = bishopImage;
    document.getElementById(currentLocation).textContent = currentPiece;
}

function alertText(textBody){
    const textarea = document.getElementById('inputText');
    textarea.innerHTML = textBody;
}

function startGame() {
    if (isTrainingRoom)
    {
        isTrainingRoom = false;
        initGame(0);
    }
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('content').style.display = 'none'; 
    isGameStarted = true;
    //document.getElementById('container').style.display = 'block'; 
    document.getElementById('sponsors').style.display = 'block'; 
    document.getElementById('sponsors').innerHTML = SPONSOR_TEXT;
    //document.getElementById('inputText').style.display = 'inline'; // Hide chessboard area
    //document.getElementById('chessboard').style.display = 'inline'; // Hide chessboard
}

function generateShareableText(completionTime) {
    return `🏆 I completed the MazeChess Challenge in ${completionTime} seconds! Can you beat my time? #MazeChessChallenge #Chess`;
}

//SOCIAL MEDIA CODE

function shareOnTwitter() {
    const completionTime = 45; // Example time; replace with actual completion time
    const text = generateShareableText(completionTime);
    const url = encodeURIComponent(window.location.href); // Current page URL
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
    window.open(twitterUrl, '_blank');
}

function shareOnFacebook() {
    const completionTime = 45; // Example time; replace with actual completion time
    const text = generateShareableText(completionTime);
    const url = encodeURIComponent(window.location.href); // Current page URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(text)}`;
    window.open(facebookUrl, '_blank');
}

function btnTrainingGrounds() {
    document.getElementById("training-grounds-row").style.display = true;
}

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

function showContact() {
    hideGameArea();
    document.getElementById("startScreen").style.display = 'none';
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = CONTACT_TEXT;
    contentDiv.style.display = 'block';
}

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
    //document.getElementById("startButton").style.visibility = !isGameStarted;
    document.getElementById("training-grounds-row").style.display = 'none';
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('chessboard').style.display = 'none'; // Hide chessboard
    document.getElementById('button-box').style.display = 'none'; // Hide chessboard
}

function btnTG(level){
    moveCount = 0;
    blockedSpaces =  [];
    isTrainingRoom = true;
    initGame(level); 
}

  // Event listener for the copy button
  //document.getElementById('copyButton').addEventListener('click', copyChessboardToClipboard);
    document.addEventListener('DOMContentLoaded', function() {
        //document.getElementByClass("training-grounds-row").style.visibility = false;
        isTrainingRoom = false;
        
        initGame(0); // Call init when DOM is ready
  });

