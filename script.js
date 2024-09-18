// Global Vars
let startTime;
let currentPiece;
let currentLocation;
let previousLocation;
// Define an array of available pieces
const pieces = ['♚', 'R', 'N', 'B'];

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

// NEW CODE

// Function to check if a space is blocked due to Lava or Water
function isBlocked(space) {
    // Check if the space is listed in the blockedSpaces array
    const isBlockedByGeneralRules = blockedSpaces.some(blockedSpace => blockedSpace.space === space);

    // Check if the space contains Lava or Water
    const terrain = terrainTypes.find(terrain => terrain.space === space);
    const isBlockedByTerrain = terrain && (terrain.type === 'Lava' || terrain.type === 'Water');

    return isBlockedByGeneralRules || isBlockedByTerrain;
}

// Function to check if a space is blocked
function isBlocked2(space) {
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
            if (isBlocked2(pos)) {
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
            if (isBlocked2(pos)) {
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
            if (isBlocked2(pos)) {
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


// Function to check if the path between two spaces is clear
function isPathClear2(current, destination) {
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
            path.push(String.fromCharCode(currentCol) + row);
        }
    } else if (currentRow === destRow) {
        // Horizontal movement
        let minCol = Math.min(currentCol, destCol);
        let maxCol = Math.max(currentCol, destCol);
        for (let col = minCol + 1; col < maxCol; col++) {
            path.push(String.fromCharCode(col) + currentRow);
        }
    } else if (Math.abs(destCol - currentCol) === Math.abs(destRow - currentRow)) {
        // Diagonal movement
        let colStep = destCol > currentCol ? 1 : -1;
        let rowStep = destRow > currentRow ? 1 : -1;
        let col = currentCol + colStep;
        let row = currentRow + rowStep;
        while (col !== destCol && row !== destRow) {
            path.push(String.fromCharCode(col) + row);
            col += colStep;
            row += rowStep;
        }
    }

    return path.every(space => !isBlocked(space));
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
// Function to generate random blocked spaces with types (LAVA, Water, etc.)
function generateBlockedSpaces() {
    blockedSpaces = []; // Reset blocked spaces array
    for (let i = 0; i < 15; i++) {
        let x = String.fromCharCode(97 + Math.floor(Math.random() * 8)); // Random letter from 'a' to 'h'
        let y = Math.floor(Math.random() * 8) + 1; // Random number from 1 to 8
        if (!(x=="h" && y==8) && !(x=="a" && y==1)){
            let type = Math.random() < 0.5 ? 'LAVA' : 'Water'; // Randomly assign type
            blockedSpaces.push({ space: `${x}${y}`, type: type });
        }
    }
}

// Function to generate the chessboard
function generateChessboard() {
    let chessboard = document.getElementById('chessboard');
    chessboard.innerHTML = ''; // Clear existing content
    let tbody = document.createElement('tbody');

    for (let i = 8; i >= 1; i--) {
        let row = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            let cell = document.createElement('td');
            let colLabel = String.fromCharCode(97 + j);
            let position = colLabel + i;
            cell.setAttribute('id', position);

            // Create a button element
            let button = document.createElement('button');
            button.setAttribute('id', position);
            button.textContent = "";

            if (i===8 && j===7) {
                button.textContent = "end";
            }

            if (i===1 && j===0) {
                button.textContent = "start";
            }
            //button.textContent.visibility = "hidden";
            button.onclick = () => handleCellClick(position); 
           // Add click event handler

            // Apply styling for blocked spaces based on type
            let spaceType = getSpaceType(position);
            if (spaceType) {
                //alert(spaceType);
                cell.classList.add(spaceType);
               
                if (spaceType == 'Water' || spaceType =='LAVA'){
                    //button.textContent = "X";
                    button.classList.add(spaceType);
                    button.disabled = true;
                }

                //button.onclick = () => handleCellClick(position);  // Add class based on type
            }
            //button.className = "buttonBoardClass";
            cell.appendChild(button); // Add button to cell
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    chessboard.appendChild(tbody);
}

// Example function to determine space type (blocked or not)
function getSpaceType(position) {
    // You can adjust this function to return different types based on your requirements
    let blockedSpace = blockedSpaces.find(space => space.space === position);
    return blockedSpace ? blockedSpace.type : null;
}

function handleCellClick(position) {
    movePiece(position);
}

// Function to get the type of blocked space at a given position
function getSpaceType(position) {
    let space = blockedSpaces.find(blockedSpace => blockedSpace.space === position);
    return space ? space.type : null;
}

function movePiece(location) {
    let current = currentLocation;
    let destination = location;
   
    // Validate inputs
    if (!isValidInput(current) || !isValidInput(destination)) {
        alertText("Invalid input. Please enter valid coordinates (e.g., a1).");
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
        case '♚':
            piece = new King();
            break;
        case 'R':
            piece = new Rook();
            break;
        case 'N':
            piece = new Knight();
            break;
        case 'B':
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
    renderChessboard();

    if (destination=='h8') {
        let endTime = new Date();
        let completionTime = (endTime - startTime) / 1000; // Time in seconds
        alertText("You have won - number of moves in a time (sec) : " + completionTime);
    }
}

// Function to validate input coordinates
function isValidInput(input) {
    return /^[a-h][1-8]$/.test(input);
}

// Function to check if a space is blocked
function isBlocked(space) {
    return blockedSpaces.includes(space);
}

// Function to prompt player for initial piece selection
function selectInitialPiece() {
    //let selectedPiece = document.getElementById('selectedPiece').value;
    let selectedPiece = document.getElementById('selectedPiece').value;
    //alert(selectedPiece);
    if (!selectedPiece || !pieces.includes(selectedPiece)) {
        alertText("Invalid piece selection. Please choose from K, R, N, or B.(" + selectedPiece + ")");
        selectInitialPiece(); // Prompt again if selection is invalid
        return;
    }

    // Set initial piece position
    document.getElementById('a1').textContent = selectedPiece;
}

function selectKing() {
    currentPiece = '♚';
    document.getElementById(currentLocation).textContent = currentPiece;
}

function selectRook() {
    currentPiece = 'R';
    document.getElementById(currentLocation).textContent = currentPiece;
}

function selectKnight() {
    currentPiece = 'N';
    document.getElementById(currentLocation).textContent = currentPiece;
}

function selectBishop() {
    currentPiece = 'B';
    document.getElementById(currentLocation).textContent = currentPiece;
}

// Function to render the chessboard
function renderChessboard() {
    let chessboard = document.getElementById('chessboard');
    for (let i = 8; i >= 1; i--) {
        for (let j = 0; j < 8; j++) {
            let cell = document.getElementById(String.fromCharCode(97 + j) + i);
            cell.classList.remove('blocked'); // Remove blocked class from all cells
            if (isBlocked(cell.id)) {
                cell.classList.add('blocked'); // Add blocked class to blocked cells
            }
        }
    }
}

function alertText(textBody){
    document.getElementById('alertText').textContent = textBody;
}

function selectPiece() {

    selectInitialPiece();
    //document.getElementById('a1').textContent = selectedPiece;
    document.getElementById('init').style.visibility = 'hidden' ;
    document.getElementById('start').style.visibility = 'hidden' ;
    document.getElementById('main').style.visibility = 'visible' ;
}

function startGame() {
    //document.getElementById('a1').textContent = selectedPiece.value;
}

function initGame() {
    currentLocation = "a1";
    generateBlockedSpaces(); // Call generateBlockedSpaces() before generating the chessboard
    generateChessboard(); // Generate the chessboard after generating blocked spaces
    startTime = new Date(); 
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

function shareOnWhatsApp() {
    const completionTime = 45; // Example time; replace with actual completion time
    const text = generateShareableText(completionTime);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
}

async function captureChessboard() {
    const chessboard = document.getElementById('chessboard');

    // Check if the chessboard exists
    if (!chessboard) {
        console.error("Chessboard element not found.");
        return null; // Return early if the chessboard is not found
    }

    try {
        const canvas = await html2canvas(chessboard); // Capture the chessboard as a canvas
        return canvas.toDataURL('image/png'); // Returns the data URL of the canvas
    } catch (error) {
        console.error("Error capturing chessboard: ", error);
        return null; // Handle errors gracefully
    }
}

async function copyChessboardToClipboard() {
    const chessboardImage = captureChessboard();
    const response = await fetch(chessboardImage);
    const blob = await response.blob(); // Create a Blob from the image data

    const clipboardItem = new ClipboardItem({
        'image/png': blob // Specify the type of the Blob
    });

    try {
        await navigator.clipboard.write([clipboardItem]);
        alert("Chessboard image copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy: ", err);
        alert("Failed to copy the image. Please try again.");
    }
}

document.getElementById('start').style.visibility = 'hidden' ;
window.onload = initGame;
