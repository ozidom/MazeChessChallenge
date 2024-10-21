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