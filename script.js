// Define classes for each piece
class Piece {
    constructor(name) {
        this.name = name;
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
const pieces = ['King', 'Rook', 'Knight', 'Bishop'];

// Define an array to store blocked spaces
let blockedSpaces = [];

// Function to prompt player for initial piece selection
function selectInitialPiece() {
    let selectedPiece = prompt("Choose a piece to start at a1 (King, Rook, Knight, Bishop):");
    if (!selectedPiece || !pieces.includes(selectedPiece)) {
        alert("Invalid piece selection. Please choose from King, Rook, Knight, or Bishop.");
        selectInitialPiece();
        return;
    }

    // Set initial piece position
    document.getElementById('a1').textContent = selectedPiece;
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

            // Apply styling for blocked spaces
            if (isBlocked(position)) {
                cell.classList.add('blocked');
            }

            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    chessboard.appendChild(tbody);
}


// Function to generate random blocked spaces
function generateBlockedSpaces() {
    blockedSpaces = []; // Reset blocked spaces array
    for (let i = 0; i < 10; i++) {
        let x = String.fromCharCode(97 + Math.floor(Math.random() * 8)); // Random letter from 'a' to 'h'
        let y = Math.floor(Math.random() * 8) + 1; // Random number from 1 to 8
        blockedSpaces.push(`${x}${y}`);
    }
}

// Function to move a piece
function movePiece() {
    let current = document.getElementById('current').value.toLowerCase();
    let destination = document.getElementById('destination').value.toLowerCase();

    // Validate inputs
    if (!isValidInput(current) || !isValidInput(destination)) {
        alert("Invalid input. Please enter valid coordinates (e.g., a1).");
        return;
    }

    // Check if destination is blocked
    if (isBlocked(destination)) {
        alert("Destination is blocked. Choose another destination.");
        return;
    }

    let pieceName = document.getElementById(current).textContent;

    // Validate move based on piece type
    let piece;
    switch (pieceName) {
        case 'King':
            piece = new King();
            break;
        case 'Rook':
            piece = new Rook();
            break;
        case 'Knight':
            piece = new Knight();
            break;
        case 'Bishop':
            piece = new Bishop();
            break;
        default:
            alert("Invalid piece.");
            return;
    }

    if (!piece.isValidMove(current, destination)) {
        alert("Invalid move for the selected piece.");
        return;
    }

    // Update destination cell with piece
    document.getElementById(destination).textContent = pieceName;

    // Clear current cell
    document.getElementById(current).textContent = '';

    // Example: Update the chessboard
    renderChessboard();
}

// Function to validate input coordinates
function isValidInput(input) {
    return /^[a-h][1-8]$/.test(input);
}

// Function to check if a space is blocked
function isBlocked(space) {
    return blockedSpaces.includes(space);
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

// Initialize game
function startGame() {
    generateBlockedSpaces(); // Call generateBlockedSpaces() before generating the chessboard
    generateChessboard(); // Generate the chessboard after generating blocked spaces
    selectInitialPiece();
}

// Call startGame() when the page loads
window.onload = startGame;
