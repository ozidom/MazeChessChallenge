class ChessboardBlockedSpaces {
    constructor() {
        // Store the raw data within the class as an array of objects
        this.data = [
            { date: "2024-09-16", locations: ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"] },
            { date: "2024-09-17", locations: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"] },
            { date: "2024-09-18", locations: ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-19", locations: ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"] },
            { date: "2024-09-20", locations: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"] },
            { date: "2024-09-21", locations: ["A8", "B7", "C4", "D7", "E6", "F3", "G3", "H3"] },
            { date: "2024-09-22", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-23", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-24", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-25", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-26", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-27", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-28", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
        ];
    }

    // Method to retrieve blocked spaces by date
    getBoardByDate(date) {
        // Find the entry that matches the given date
        const entry = this.data.find(config => config.date === date);
        
        // Return the blocked locations or an empty array if no match is found
        return entry ? entry.locations : [];
    }
}