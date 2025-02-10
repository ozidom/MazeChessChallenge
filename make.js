// Variables and initializations
const chessboard = document.getElementById('MakeChessboard');
const generateBtn = document.getElementById('generateBtn');
const output = document.getElementById('output');
const outputLabel = document.getElementById('outputLabel');
const modeSelect = document.getElementById('modeSelect');
var selectedItem;

// Create an 8x8 chessboard
const boardSize = 8;
const squaresMap = {}; // Map to store squares by position

function CreateMakerMap() {
//clear the chessboard
chessboard.textContent = "";

for (let y = boardSize; y >= 1; y--) {
    for (let x = 0; x < boardSize; x++) {
        const square = document.createElement('div');
        square.classList.add('square');
        const position = String.fromCharCode(65 + x) + y; // A1 to H8
        square.dataset.position = position;
        square.classList = (x + y) % 2 === 0 ? 'white' : 'black';
        square.addEventListener('click', toggleSquare);
        chessboard.appendChild(square);
        squaresMap[position] = square; // Store square in map
        }
    }
}

function selectMake(button)
{
    document.querySelectorAll('.make-button').forEach(btn => btn.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    var value = button.textContent;
    selectedItem = value;
}


function toggleSquare() {
    const mode = selectedItem; // Get the selected mode
    const modeToClassMap = {
        '♞': 'knight',
        '♝': 'bishop',
        '♚': 'king',
        '♜': 'rook',
        'blocked': 'blocked',
        'gold': 'gold'
    };

    const className = modeToClassMap[mode];
    if (!className) {
        console.warn("No matching class for mode:", mode);
        return;
    }

    // Check if the square already has the class
    if (this.classList.contains(className)) {
        this.classList.remove(className); // Remove class if already present
        this.textContent = ''; // Clear text content if needed
    } else {
        // Clear all other classes before applying the new one
        Object.values(modeToClassMap).forEach(cls => this.classList.remove(cls));
        this.classList.add(className);
        this.classList.add('square');

        // Set text content only for guards
        if (['knight', 'bishop', 'king', 'rook'].includes(className)) {
            this.textContent = mode; // Use the symbol (♞, ♝, etc.)
        } else {
            this.textContent = ''; // Clear text for other classes
        }
    }
}

// Generate JSON
generateBtn.addEventListener('click', () => {
    const blockedSquares = [];
    const goldSquares = [];
    const guardSquares = [];
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        if (square.classList.contains('blocked')) {
            blockedSquares.push(square.dataset.position);
        }
        if (square.classList.contains('gold')) {
            goldSquares.push(square.dataset.position);
        }
        if (square.classList.contains('king')) {
            guardSquares.push('♚' + square.dataset.position);
        }
        if (square.classList.contains('knight')) {
            guardSquares.push('♞' + square.dataset.position);
        }
        if (square.classList.contains('rook')) {
            guardSquares.push('♜' + square.dataset.position);
        }
        if (square.classList.contains('bishop')) {
            guardSquares.push('♝' + square.dataset.position);
        }
    });

    const jsonOutput = {
        date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD
        gold: goldSquares,
        guard: guardSquares,
        locations: blockedSquares
    };
    outputLabel.textContent = "Copy the following and send to bardofthedungeon@gmail.com";
    output.textContent = JSON.stringify(jsonOutput, null, 2);
});

// Clear board
clearBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('blocked');
        square.classList.remove('gold'); // Remove all classes
        square.classList.remove('knight'); // Remove path highlights
        square.classList.remove('rook'); // Remove path highlights
        square.classList.remove('king'); // Remove path highlights
        square.classList.remove('bishop'); // Remove path highlights
       
        square.textContent = ''; // Clear text content
    });
    output.textContent = ''; // Clear the JSON output
});


// Helper function to convert position to coordinates
function positionToCoords(pos) {
    const x = pos.charCodeAt(0) - 65; // 'A' to 0
    const y = parseInt(pos.substring(1)) - 1; // '1' to 0
    return { x, y };
}

// Helper function to convert coordinates to position
function coordsToPosition(x, y) {
    return String.fromCharCode(65 + x) + (y + 1);
}

// Check if coordinates are within the board
function isValidPosition(x, y) {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
}

