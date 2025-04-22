
    function generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
        
        // Function to fetch high scores from the Azure Function
    async function fetchHighScores() {
        const url = 'https://mazechesschallengehighscorefunction.azurewebsites.net/api/httpscores'; // Your local Azure Function URL

        try {
            // Fetch the data from the Azure Function
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON response
            const dataMoves = await response.json();

            // Display the high scores
            displayLowestMoves(dataMoves,'highscoresmoves',"Fastest moves");

        } catch (error) {
            console.error("Failed to fetch high scores:", error);
        }
    }

        // Function to display the high scores on the page
    function displayLowestMoves(scores,element,name) {
        const highScoresDiv = document.getElementById(element);

        // Clear any existing content
        highScoresDiv.innerHTML = '';
        const header = document.createElement('h2');  // Just 'h2' instead of '<H2>'
        header.textContent = name + ' for today (GMT)';  // Set the text content separately
        highScoresDiv.appendChild(header);  

        // Loop through the scores and create divs for each entry
        scores.forEach(score => {
            // Create a new div element
            const scoreDiv = document.createElement('div');
            
            // Set the content to show the name, moves, and time
            scoreDiv.textContent = `${score.moves} ${score.username}`;
            //scoreDiv.textContent = `${score.moves}, ${score.username}, Time: ${score.time}`;
            // Add some styling or classes (optional)
            scoreDiv.style.marginBottom = '10px';
            scoreDiv.style.padding = '1px';
            scoreDiv.style.border = '0';

            // Append the div to the high-scores container
            highScoresDiv.appendChild(scoreDiv);
        });
    }

    function displayFastestTimes(scores,element,name) {
        const highScoresDiv = document.getElementById(element);

        // Clear any existing content
        highScoresDiv.innerHTML = '';
        const header = document.createElement('h4');  // Just 'h2' instead of '<H2>'
        header.textContent = name + ' for today (GMT)';  // Set the text content separately
        highScoresDiv.appendChild(header);  

        // Loop through the scores and create divs for each entry
        scores.forEach(score => {
            // Create a new div element
            const scoreDiv = document.createElement('div');
            
            // Set the content to show the name, moves, and time
            scoreDiv.textContent = `${score.moves} ${score.username}`;
            //scoreDiv.textContent = `${score.moves}, ${score.username}, Time: ${score.time}`;
            // Add some styling or classes (optional)
            scoreDiv.style.marginBottom = '10px';
            scoreDiv.style.padding = '1px';
            scoreDiv.style.border = '0';

            // Append the div to the high-scores container
            highScoresDiv.appendChild(scoreDiv);
        });
    }

    async function submitHighScore(username, moveCount, completionTime) {

        const newScore = {
            id: generateGUID(),  
            username: username,
            moves: moveCount,
            time: completionTime
        };

        try {
            var local = "http://localhost:7132/api/HttpScores";
            var remote = "https://mazechesschallengehighscorefunction.azurewebsites.net/api/httpscores";
            const response = await fetch(local, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(newScore)
            });

            // Check if the response has content before attempting to parse JSON
            if (response.ok) {
                        const data = await response.json();
                        console.log("New high score submitted:", data);
                    } else {
                        console.log("Error submitting high score: HTTP status", response.status);
                    }
        } 
        catch (error) {
            console.error("Error submitting high score:", error);
        }
    }