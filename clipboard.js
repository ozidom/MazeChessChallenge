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