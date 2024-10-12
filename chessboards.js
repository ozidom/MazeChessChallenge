class ChessboardBlockedSpaces {
    constructor() {
        // Store the raw data within the class as an array of objects

        //proposed change each location to be:
        // "A1,L" indicating LAVA
        // "A2,W" indicating Water
        // "A2,C" indicating Chasm

        this.data = [
            { date: "2024-09-16", locations: ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"] },
            { date: "2024-09-17", locations: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"] },
            { date: "2024-09-18", locations: ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-19", locations: ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"] },
            { date: "2024-09-20", locations: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"] },
            { date: "2024-09-21", locations: ["A1", "B7", "C4", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-22", locations: ["A2", "B3", "C4", "D5", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-23", locations: ["A3", "B3", "C4", "D8", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-24", locations: ["A4", "B4", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-25", locations: ["A5", "B8", "C5", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-26", locations: ["A8", "B2","B3","B8","C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-27", locations: ["A7", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-28", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-28", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-28", locations: ["A8", "B3", "C3", "D3", "E3", "F3", "G3", "H3"] },
            { date: "2024-09-29", locations: [ "A2", "A3", "A4", "A6", "A7", "B1", "B2", "B5", "B6", "C1", "C2", "C4", "C5", "C6", "C7", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "F1", "F2", "F3", "G1", "G2" ] },
            { date: "2024-09-30", locations: [ "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "F1", "F2","G6","G7","G8","G1", "G2", "G3", "G4" ] },
            { date: "2024-10-01", locations: [ "A2", "A3", "A4", "A5", "A6", "B3", "B4", "B5", "B6", "B7", "C1", "C2", "C3", "C4", "C5", "C6", "D2", "D3", "D4", "D5", "E1", "E2", "F1", "F2", "G1", "G2", "G3", "G4", "G5", "H1" ] },
            { date: "2024-10-02", locations: [ "B8", "E8", "B7", "C7", "F7", "G7", "H7", "B5", "D5", "E5", "F5", "C4", "F4", "A3", "B3", "C3", "F3", "G3", "C2", "D2", "D1" ] },
            { date: "2024-10-03", locations: [ "B1", "B2", "B3", "C1", "C2", "C3", "C4","C5","C6","C7","D1", "D2", "D3", "D4", "E1", "E2", "F1", "F2", "F3", "G1", "G2", "H2", "H3", "H4", "H5" ] },
            { date: "2024-10-04", locations: [ "F7", "G7", "D6", "F6", "G6", "A5", "C5", "E5", "A4", "B4", "D4", "E4", "F4", "G4", "A3", "F3", "H3", "A2", "B2", "C2", "D2", "F2", "G2", "H2", "B1", "C1", "D1", "E1", "F1", "G1" ] },
            { date: "2024-10-05", locations: [ "A6","B6","C6", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "D1", "D2", "D3","D5","D6", "E1", "E2", "F1", "F2", "F3", "G1", "G2", "G3", "H1", "H2" ] },
            { date: "2024-10-06", locations: [ "A2", "A3", "A6","B6","C6", "B3", "B4", "B5", "C2", "C3", "C4", "D2", "D3", "D4", "E1", "E2", "F1", "F2", "F3","F4","F5","F6","G1", "G2", "H2", "H3" ] },
            { date: "2024-10-07", locations: [ "A3", "A4", "A5", "A6", "B1", "B2", "C1", "C2", "C3", "D2", "D3", "D4", "D5", "D6", "D7", "E2", "F1", "F2", "F6","F7","F8","G1", "G2", "H2", "H3" ] },
            { date: "2024-10-08", locations: [ "F8", "D7", "F7", "A6", "D6", "B5", "D5", "E5", "F5", "B4", "F4", "B3", "C3", "F3", "G3", "H3", "B2", "D2", "E2", "F2", "G2", "H2", "C1" ] },
            { date: "2024-10-09", locations: [ "A2", "A3", "A4", "B3", "B4", "B5", "C1", "C2", "C3", "D2", "D3", "D4", "E2", "F1", "F2", "G1", "G2", "H2", "H3", "H4" ] },
            { date: "2024-10-10", locations: [ "D8", "E8", "F8", "G8", "E7", "F7", "G7", "C6", "D6", "G6", "A5", "E5", "F5", "A4", "B4", "F4", "G4", "A3", "B3", "D3", "F3", "G3", "H3", "A2", "B2", "C2", "D2", "F2", "G2", "H2", "E1", "F1", "G1", "H1" ]},
            { date: "2024-10-11", locations: [ "D8", "E7", "F7", "G7", "A6", "C6", "G6", "A5", "C5", "D5", "E5", "G5", "A4", "B3", "C3", "D3", "E3", "F3", "H3", "F2", "H2", "B1", "C1", "D1", "E1", "F1", "G1", "H1" ]  },
            { date: "2024-10-12", locations: [ "A7", "C7", "D7", "E7", "F7", "G7", "H7", "B6", "C6", "B5", "C5", "E5", "F5", "G5", "H5", "A4", "C4", "H4", "A3", "B3", "C3", "D3", "E3", "F3", "H3", "B2", "D2", "F2", "H2", "B1", "C1", "E1", "G1", "H1" ] },
            { date: "2024-10-13", locations: [ "C8", "A7", "B7", "C7", "E7", "G7", "A6", "B6", "D6", "E6", "F6", "G6", "B5", "C5", "H5", "A4", "C4", "D4", "E4", "F4", "G4", "B3", "C3", "D3", "C2", "D2", "F2", "H2", "C1", "E1", "F1", "G1", "H1" ] },
            { date: "2024-10-14", locations: [ "A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "D1", "D2", "E1", "F1", "F2", "G1", "H2" ] },
            { date: "2024-10-15", locations: [ "A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "C1", "C2", "D1", "D2", "E1", "F1", "F2", "G2", "H1", "H2" ] },
            { date: "2024-10-16", locations: [ "A2", "A3", "A4", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "F1", "F2", "G1", "G2", "H2", "H3" ] }
        ]

    }

    // Method to retrieve blocked spaces by date
    getBoardByDate(date) {
        // Find the entry that matches the given date
        const entry = this.data.find(config => config.date === date);
        
        // Return the blocked locations or an empty array if no match is found
        return entry ? entry.locations : [];
    }
}