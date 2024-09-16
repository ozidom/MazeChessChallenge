
let startTime;


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

class King extends Piece {
    isValidMove(current, destination) {
        // Implement King's movement validation
        // Example: King can move one square in any direction
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        return dx <= 1 && dy <= 1;
    }
}

class Rook extends Piece {
    isValidMove(current, destination) {
        // Implement Rook's movement validation
        // Example: Rook can move horizontally or vertically
        return current[0] === destination[0] || current[1] === destination[1];
    }
}

class Knight extends Piece {
    isValidMove(current, destination) {
        // Implement Knight's movement validation
        // Example: Knight can move in L-shaped pattern
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}

class Bishop extends Piece {
    isValidMove(current, destination) {
        // Implement Bishop's movement validation
        // Example: Bishop can move diagonally
        let dx = Math.abs(destination.charCodeAt(0) - current.charCodeAt(0));
        let dy = Math.abs(parseInt(destination[1]) - parseInt(current[1]));
        return dx === dy;
    }
}

// Define an array of available pieces
const pieces = ['K', 'R', 'N', 'B'];

// Define an array to store blocked spaces
let blockedSpaces = [];


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
            cell.textContent = position;

            // Apply styling for blocked spaces based on type
            let spaceType = getSpaceType(position);
            if (spaceType) {
                cell.classList.add(spaceType); // Add class based on type
            }

            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    chessboard.appendChild(tbody);
}

// Function to get the type of blocked space at a given position
function getSpaceType(position) {
    let space = blockedSpaces.find(blockedSpace => blockedSpace.space === position);
    return space ? space.type : null;
}

// Function to move a piece
function movePiece() {
    let current = document.getElementById('current').value.toLowerCase();
    let destination = document.getElementById('destination').value.toLowerCase();
   
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
        case 'K':
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

    piece.moveCount++;

    // Clear current cell
    document.getElementById(current).textContent = ''; 
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
    let selectedPiece = document.getElementById('selectedPiece').value;; 
    //alert(selectedPiece);
    if (!selectedPiece || !pieces.includes(selectedPiece)) {
        alertText("Invalid piece selection. Please choose from K, R, N, or B.(" + selectedPiece + ")");
        selectInitialPiece(); // Prompt again if selection is invalid
        return;
    }

    // Set initial piece position
    document.getElementById('a1').textContent = selectedPiece;
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

// Initialize game
function initGame() {
    alertText("hello");
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

// Call innitGame() when the page loads

document.getElementById('main').style.visibility = 'hidden' ;
document.getElementById('start').style.visibility = 'hidden' ;
window.onload = initGame;
