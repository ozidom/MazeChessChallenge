## Project Overview

MazeChess is a web-based puzzle game that combines chess piece movement rules with maze-solving mechanics. Players navigate through daily challenges using chess pieces (King, Rook, Knight, Bishop) to reach the goal while collecting gold and avoiding blocked spaces.

## Development Environment

### Local Dev
- Clone MazeChessChalleng
- Use VSCode 
- Install Live Server
- Right click on index.html and click "Open with Live Server"

### Back End
- Clone MazeChessHighScore
- Use VSCode
- Install Azure Extensions
- Install Azure Storage Extensions
- Install Azure Functions Extensions
- Make sure the localsettings.json file has the CORS settings 



## Core Architecture

### Main Game Files
- `index.html` - Main entry point with complete UI layout
- `mazechess.js` - Core game logic, piece movement, and game state management
- `piece.js` - Chess piece classes (King, Rook, Knight, Bishop) with movement validation
- `chessboards.js` - Daily puzzle data storage class with blocked spaces, gold, and guard positions
- `make.js` - Level editor for creating custom boards

### Supporting Files
- `menu.js` - Navigation and screen management
- `utility.js` - Utility functions
- `textcontent.js` - Text content and messaging
- `username.js` - User identity management
- `highscore.js` - High score API integration
- `clipboard.js` - Board sharing functionality
- `styles.css` - Game styling

### Game Architecture
- **Game State**: Managed globally with variables in `mazechess.js`
- **Piece Movement**: Each piece class implements `isValidMove()` method
- **Board Generation**: 8x8 grid with coordinate system (A1-H8)
- **Daily Challenges**: Stored as objects in `chessboards.js` with date-based lookup
- **Training Mode**: Procedurally generated levels with varying difficulty

### Key Game Mechanics
- Players start at A1 and must reach H8
- Each piece has specific movement rules following chess conventions
- Path validation ensures pieces can't move through blocked spaces
- Gold collection is required before finishing
- Guards (enemy pieces) must be defeated with matching piece types

### Data Structure
Daily puzzles are stored in `chessboards.js` with this format:
```javascript
{
    date: "YYYY-MM-DD",
    locations: ["A2", "B3", ...], // blocked spaces
    gold: ["C4", "F6", ...],      // gold locations
    guard: ["♚A5", "♜B7", ...]    // guard type + position
}
```

## Live Site
https://mazechessgame.com

## Analytics
Google Analytics is integrated.
Daily challenge to solve using chess strategies



