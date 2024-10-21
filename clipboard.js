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