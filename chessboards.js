class ChessboardBlockedSpaces {
    constructor() {
        // Store the raw data within the class as an array of objects

        /*let kingImage = "♚";
        let rookImage = "♜";
        let knightImage = "♞";
        let bishopImage = "♝ ";*/

        this.data = [
            {"date": "2026-08-30", "gold": [ "C8", "D8", "G8", "A7", "B7", "E7", "F7", "D5", "G5", "A2", "G2", "D1" ], "guard": [ "♞E8", "♝F8", "♞C7", "♝D7", "♝G7", "♝B6", "♝E6", "♞F6", "♝G6", "♝C5", "♝H5", "♝B4", "♞C4", "♞H4", "♝C3", "♝H3", "♝E1", "♞F1" ], "locations": [ "A8", "B8", "E4", "F4", "E3", "F3", "H2", "G1", "H1" ] },
            {"date": "2026-08-31", "gold": [ "F8", "C5", "F4", "H4", "E1" ], "guard": [ "♝D8", "♝C7", "♝F6", "♝H6", "♝A5", "♝D5", "♝E5", "♝G5", "♝B4", "♝E4", "♝A3", "♝C3", "♝B2", "♝D2" ], "locations": [ "A8", "B8", "E8", "A7", "B7", "D7", "F7", "C6", "G6", "B5", "H5", "A4", "G4", "B3", "F3", "C2", "E2", "G2", "H2", "D1", "G1", "H1" ] },
            {"date": "2026-09-01", "gold": [ "D8", "G7", "D5", "H4", "F2" ], "guard": [ "♞C7", "♝D7", "♝F7", "♞A6", "♞C6", "♝D6", "♞E6", "♞G6", "♞H6", "♝B5", "♝C5", "♞H5", "♞A4", "♚C4", "♝D4", "♞E4", "♝G4", "♞A3", "♞B3", "♚D3", "♝E3", "♝F3", "♞H3", "♚B2", "♚C2", "♞D2", "♝E2", "♞G2", "♞H2", "♞B1", "♞C1", "♞D1" ], "locations": [ "A8", "B8", "A7", "E7", "F5", "G3", "H1" ] },
            {"date": "2026-09-02", "gold": [ "A8", "C8", "D8", "F6", "H4", "E3", "G3", "C2", "G2", "E1" ], "guard": [ "♞B7", "♜C7", "♞D7", "♞F7", "♞B6", "♞D6", "♞E6", "♞G6", "♞B5", "♞F5", "♚G4", "♚D3", "♚H3", "♚F1" ], "locations": [ "D5", "E5", "D4", "E4", "B2", "H2", "G1", "H1" ] },
            {"date": "2026-09-03", "gold": [ "A8", "F8", "F7", "G6", "H6", "E4", "B3", "C3", "G3", "A2", "C2", "B1", "H1" ], "guard": [ "♞B7", "♝C7", "♝E7", "♚G7", "♞B6", "♝C6", "♝E6", "♝F6", "♞B5", "♞C5", "♚G5", "♞B4", "♞C4", "♝G4", "♚E3", "♝F3", "♝F2" ], "locations": [ "D7", "D6", "D5", "E5", "F5", "D4", "F4", "D2", "E2" ] },
            {"date": "2026-09-04", "gold": [ "C7", "F7", "B5", "D3", "F3", "B2", "D1", "H1" ], "guard": [ "♝F8", "♞G7", "♜H7", "♚A6", "♚B6", "♝D6", "♝E6", "♜C5", "♞E5", "♞G5", "♝A4", "♜B4", "♝C4", "♜F4", "♝G4", "♝A2", "♚C2" ], "locations": [ "A8", "B8", "A7", "B7", "C6", "D5", "D4", "E4", "G3", "F2", "G2" ] },
            {"date": "2026-09-05", "gold": [ "A8", "D3", "H1" ], "guard": [ "♚G8", "♚G7", "♚G6", "♜B5", "♜C5", "♚G5", "♝C4", "♚G4", "♝C3", "♚G3", "♝C2", "♚G2", "♝C1", "♚G1" ], "locations": [ "A7", "B7", "C7", "D7", "E7", "B6", "C6", "E6", "E5", "H5", "B4", "E4", "H4", "B3", "E3", "B2", "E2", "B1" ] },
            {"date": "2026-09-06", "gold": [ "C7", "E7", "G7", "B6", "F6", "H5", "C4", "C3", "G3", "B2" ], "guard": [ "♚F7", "♝C6", "♝G6", "♚H6", "♝B5", "♝B4", "♝D4", "♝G4", "♚H4", "♝B3", "♝H3", "♝C2", "♝F2" ], "locations": [ "A8", "B8", "A7", "B7", "D6", "E6", "D5", "E5", "D3", "E3", "D2", "E2", "G2", "H2", "G1", "H1" ] }
        ]}
        // Method to retrieve blocked spaces by date
        getBoardByDate(date) {
        // Find the entry that matches the given date
        const entry = this.data.find(config => config.date === date);
        
        // Return the blocked locations or an empty array if no match is found
        return entry ? entry.locations : [];
    }
      /*let kingImage = "♚";
        let rookImage = "♜";
        let knightImage = "♞";
        let bishopImage = "♝";*/

    // Method to retrieve blocked spaces by date
    getGoldByDate(date) {
        // Find the entry that matches the given date
        const entry = this.data.find(config => config.date === date);
        
        // Return the blocked locations or an empty array if no match is found
        return entry ? entry.gold : [];
    }

    // Method to retrieve blocked spaces by date for guards
    getGuardByDate(date) {
        // Find the entry that matches the given date
        const entry = this.data.find(config => config.date === date);
        
        // Return the blocked locations or an empty array if no match is found
        return entry ? entry.guard : [];
    }
}
