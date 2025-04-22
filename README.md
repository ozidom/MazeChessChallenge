# MazeChess
Daily challenge to solve using chess strategies

# Local Dev
-Clone MazeChessChalleng
-User VSCode 
-Install Live Server
-Right click on index.html and click "Open with Live Server"

# Back End
-Clone MazeChessHighScore
-Use VSCode
-Install Azure Extensions
-Install Azure Storage Extensions
-Install Azure Functions Extensions
-Make sure the localsettings.json file has the CORS settings like:
    {
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "dotnet-isolated",
    "COSMOS_DB_ENDPOINT": "https://mazechessscore.documents.azure.com:443/",
    "COSMOS_DB_KEY": "xxx"
  },
  "Host": {
    "CORS": "http://127.0.0.1:5501",
    "CORSCredentials": false
  }
}

-Clone 

# Live
https://mazechessgame.com


