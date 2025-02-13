class ChessboardBlockedSpaces {
    constructor() {
        // Store the raw data within the class as an array of objects

        /*let kingImage = "♚";
        let rookImage = "♜";
        let knightImage = "♞";
        let bishopImage = "♝";*/

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
            { date: "2024-10-13", gold : [], locations: [ "C8", "A7", "B7", "C7", "E7", "G7", "A6", "B6", "D6", "E6", "F6", "G6", "B5", "C5", "H5", "A4", "C4", "D4", "E4", "F4", "G4", "B3", "C3", "D3", "C2", "D2", "F2", "H2", "C1", "E1", "F1", "G1", "H1" ] },
            { date: "2024-10-14", gold :["B2"], locations: [ "A8", "B8", "C8", "D8", "E8", "F8", "A7", "C7", "D7", "F7", "A6", "B6", "D6", "E6", "F6", "A5", "C5", "D5", "E5", "G5", "B4", "C4", "D4", "A3", "C3", "D3", "E3", "A2", "C2", "E2", "F2", "G2", "H2", "B1", "C1", "D1", "E1", "F1", "G1" ]},
            { date: "2024-10-15", gold :["H3"], locations: ["B7", "C7", "D7", "E7", "F7", "B6", "C6", "D6", "E6", "F6", "G6", "A5", "G5", "H5", "A4", "B4", "C4", "D4", "F4", "A3", "B3", "C3", "D3", "F3", "G3", "A2", "F2", "G2", "H2", "B1", "C1", "D1", "E1", "H1"]},
            { "date": "2024-10-16", "gold" :["C8","E8","G1"], "locations": ["D8", "B7", "C7", "D7", "E7", "F7", "E6", "B5", "C5", "F5", "A4", "B4", "C4", "E4", "G4", "A3", "C3", "E3", "F3", "H3", "A2", "D2", "F2", "G2", "B1", "C1", "D1", "E1", "F1", "H1" ] },
            { "date": "2024-10-17", "gold": [ "F8", "D3", "H1" ], "locations": [ "C8", "G8", "B7", "C7", "D7", "F7", "G7", "B6", "C6", "D6", "F6", "G6", "F5", "G5", "B4", "C4", "D4", "E4", "G4", "B3", "C3", "E3", "F3", "C2", "D2", "E2", "F2", "G2", "C1", "D1", "E1", "F1", "G1" ] },
            { "date": "2024-10-18", "gold": [ "G7" ], "locations": [ "E8", "G8", "B7", "C7", "F7", "H7", "B6", "C6", "E6", "F6", "G6", "C5", "D5", "F5", "G5", "A4", "B4", "C4", "E4", "F4", "G4", "A3", "B3", "D3", "E3", "F3", "G3", "B2", "C2", "E2", "F2", "G2", "B1", "C1", "D1" ] },
            { "date": "2024-10-19", "gold": [ "F6" ], "locations": [ "F8", "G8", "B7", "C7", "D7", "E7", "G7", "B6", "C6", "D6", "G6", "B5", "C5", "E5", "F5", "B4", "C4", "D4", "F4", "G4", "A3", "C3", "E3", "F3", "G3", "A2", "D2", "E2", "F2", "B1", "C1", "G1", "H1" ] } ,
            { "date": "2024-10-20", "gold": [ "E3" ], "locations": [ "B7", "D7", "E7", "F7", "G7", "C6", "E6", "F6", "G6", "B5", "C5", "D5", "F5", "G5", "A4", "C4", "D4", "E4", "F4", "G4", "A3", "B3", "F3", "G3", "A2", "C2", "E2", "F2", "G2", "B1", "C1", "H1" ] },
            { "date": "2024-10-21", "gold": [ "A8" ], "locations": [ "A7", "B7", "C7", "D7", "F7", "G7", "A6", "B6", "F6", "G6", "B5", "C5", "D5", "E5", "F5", "G5", "A4", "C4", "D4", "E4", "F4", "G4", "A3", "B3", "E3", "F3", "G3", "A2", "C2", "D2", "F2", "G2", "C1" ] },
            { "date": "2024-10-22", "gold": [ "A8" ], "locations": [ "D8", "B7", "C7", "E7", "F7", "G7", "H7", "B6", "C6", "D6", "E6", "F6", "G6", "H6", "A4", "B4", "C4", "D4", "E4", "F4", "A3", "C3", "D3", "E3", "F3", "G3", "H3", "A2", "B2", "D2", "E2", "F2", "G2" ] },
            { "date": "2024-10-23", "gold": [ "F8", "A7" ], "locations": [ "A8", "C8", "G8", "F7", "G7", "A6", "C6", "E6", "G6", "A5", "B5", "D5", "E5", "G5", "A4", "B4", "C4", "D4", "E4", "G4", "A3", "B3", "C3", "D3", "E3", "G3", "H3", "G2", "H2", "B1", "C1", "D1", "E1", "F1", "G1", "H1" ] },
            { "date": "2024-10-24", "gold": [ "G2", "H2", "G1", "H1" ], "locations": [ "B7", "C7", "D7", "E7", "F7", "G7", "B6", "C6", "D6", "E6", "F6", "G6", "B5", "C5", "D5", "F5", "G5", "B4", "C4", "E4", "G4", "D3", "E3", "F3", "B2", "C2", "D2", "E2", "B1", "C1", "D1", "E1", "F1" ] },
            { "date": "2024-10-25", "gold": [ "F6" ], "locations": [ "F8", "G8", "B7", "C7", "D7", "E7", "G7", "B6", "C6", "D6", "G6", "B5", "C5", "E5", "F5", "B4", "C4", "D4", "F4", "G4", "A3", "C3", "E3", "F3", "G3", "A2", "D2", "E2", "F2", "B1", "C1", "G1", "H1" ] } ,
            { "date": "2024-10-26", "gold": [ "F8" ], "locations": [ "B7", "C7", "D7", "E7", "F7", "G7", "H7", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "E4", "F4", "G4", "B3", "C3", "E3", "G3", "C2", "D2", "G2", "C1", "D1", "E1", "H1" ] },
            { "date": "2024-10-27", "gold" :["C8","E8","G1"], "locations": ["D8", "B7", "C7", "D7", "E7", "F7", "E6", "B5", "C5", "F5", "A4", "B4", "C4", "E4", "G4", "A3", "C3", "E3", "F3", "H3", "A2", "D2", "F2", "G2", "B1", "C1", "D1", "E1", "F1", "H1" ] },
            { "date": "2024-10-28", "gold": [ "A7", "G5" ], "locations": [ "A8", "B7", "C7", "D7", "E7", "F7", "G7", "A6", "C6", "D6", "E6", "F6", "G6", "H6", "A5", "B5", "E5", "H5", "A4", "B4", "C4", "D4", "F4", "A3", "B3", "E3", "F3", "G3", "A2", "C2", "D2", "F2", "G2", "B1", "C1", "D1", "E1", "H1" ] }, 
            { "date": "2024-10-29", "gold": [ "A5", "H1" ], "locations": [ "A8", "B7", "E7", "F7", "G7", "B6", "C6", "E6", "F6", "G6", "B5", "C5", "F5", "H5", "A4", "B4", "C4", "E4", "G4", "A3", "C3", "E3", "F3", "A2", "D2", "F2", "G2", "B1", "C1", "D1", "E1", "F1" ] },
            { "date": "2024-10-30", "gold": [ "A8", "H4", "H1" ], "locations": [ "A7", "C7", "D7", "F7", "H7", "A6", "C6", "D6", "E6", "G6", "H6", "A5", "B5", "D5", "E5", "F5", "G5", "H5", "A4", "B4", "C4", "F4", "A3", "B3", "D3", "E3", "G3", "H3", "A2", "C2", "D2", "E2", "G2", "H2", "B1", "C1", "D1", "E1", "F1" ] },
            { "date": "2024-10-31", "gold": [ "A8", "H1" ], "locations": [ "D8", "E8", "F8", "B7", "C7", "E7", "G7", "H7", "B6", "C6", "D6", "F6", "G6", "H6", "B5", "C5", "D5", "F5", "G5", "H5", "C4", "F4", "G4", "H4", "A3", "B3", "D3", "E3", "G3", "H3", "A2", "C2", "D2", "E2", "F2", "H2", "B1", "C1", "D1", "E1", "F1", "G1" ] },
            { "date": "2024-11-01", "gold": [ "G8" ], "locations": [ "A8", "B7", "C7", "D7", "E7", "F7", "G7", "H7", "A6", "C6", "D6", "E6", "F6", "G6", "H6", "A5", "B5", "G5", "H5", "A4", "B4", "C4", "D4", "E4", "G4", "H4", "A3", "B3", "C3", "D3", "F3", "G3", "H3", "A2", "C2", "E2", "F2", "G2", "H2", "B1", "D1", "E1", "F1", "G1", "H1" ] },
            { "date": "2024-11-02", "gold": [ "A8", "C7", "B5", "E4", "H2", "B1", "G1" ], "locations": [] },
            { "date": "2024-11-03", "gold": [ "A8", "H1" ], "locations": [ "A6", "B6", "C6", "D6", "E6", "F6", "F5", "A4", "B4", "C4", "F4", "A3", "D3", "F3", "A2", "D2", "B1", "F1" ] },
            { "date": "2024-11-04", "gold": [ "A8", "E8", "E4", "H1" ], "locations": [ "C8", "D8", "F8", "A7", "B7", "D7", "E7", "F7", "B5", "C5", "D5", "F5", "G5", "B4", "C4", "D4", "G4", "A3", "C3", "D3", "G3", "A2", "B2", "E2", "F2", "D1" ] } ,
            { "date": "2024-11-05", "gold": [ "A8", "D8", "D2", "H1" ], "locations": [ "B8", "C8", "B7", "E7", "F7", "G7", "A6", "C6", "D6", "F6", "G6", "A5", "C5", "D5", "F5", "G5", "H5", "A4", "D4", "G4", "B3", "E3", "G3", "B2", "C2", "H2", "C1", "E1", "F1" ] },
            { "date": "2024-11-06", "gold": [ "A8", "D8", "H5", "D2", "H1" ], "locations": [ "B8", "C8", "B7", "D7", "E7", "F7", "G7", "H7", "A6", "C6", "D6", "F6", "G6", "H6", "A5", "C5", "F5", "G5", "A4", "D4", "F4", "G4", "H4", "B3", "C3", "E3", "H3", "B2", "C2", "E2", "F2", "H2" ] },
            { "date": "2024-11-07", "gold": [ "B5", "H4", "H1" ], "locations": [ "B7", "C7", "D7", "A6", "B6", "D6", "E6", "F6", "G6", "A5", "C5", "D5", "H5", "A4", "B4", "C4", "D4", "D3", "E3", "G3", "H3", "B2", "H2", "D1" ] },
            { "date": "2024-11-08", "gold": [ "A8", "C8", "E6", "H6", "A4", "H2", "E1" ], "locations": [ "B8", "A7", "F7", "G7", "H7", "A6", "C6", "B5", "C5", "D5", "E5", "F5", "G4", "H4", "A3", "C3", "E3", "F3", "H3", "A2", "B2", "C2", "E2", "F2", "G2", "C1" ] },
            { "date": "2024-11-09", "gold": [ "C8", "A6", "E5", "H5", "A4", "H2" ], "locations": [ "G8", "E7", "F7", "B6", "F6", "G6", "H6", "A5", "C5", "D5", "F5", "G5", "E4", "G4", "B3", "D3", "F3", "H3", "C2", "D2", "G2", "D1", "E1" ] },
            { "date": "2024-11-10", "gold": [ "D8", "B7", "C6", "H5", "D4", "H3", "E2" ], "locations": [ "A8", "B8", "C8", "C7", "G7", "B6", "H6", "B5", "C5", "D5", "E5", "C4", "E4", "H4", "D3", "E3", "F3", "G3", "C2", "D2", "F2", "G2" ] },
            { "date": "2024-11-11", "gold": [ "A8", "C6", "G6", "B4", "D4", "G4", "G1" ], "locations": [ "B7", "C7", "D7", "E7", "G7", "H7", "B6", "D6", "B5", "F5", "G5", "C4", "F4", "D3", "G3", "H3", "F2", "G2", "E1", "F1" ]},
            { "date": "2024-11-12", "gold": [ "A8", "C6", "A5", "G5", "H5", "A4", "C3", "H2", "E1" ], "locations": [ "B7", "F7", "A6", "B6", "D6", "G6", "H6", "B5", "C5", "D5", "F5", "B4", "C4", "D4", "H4", "A3", "B3", "D3", "E3", "F3", "G3", "A2", "B2", "C2", "F2", "G2", "C1", "D1", "F1", "G1", "H1"] },
            { "date": "2024-11-13", "gold": [ "A8", "D8", "C4", "F4", "C2", "E2", "H1" ], "locations": [ "C8", "A7", "B7", "D7", "E7", "C6", "B5", "E5", "F5", "G5", "B4", "E4", "C3", "E3", "F3", "G3", "H3", "D2", "F2", "H2" ] },
            { "date": "2024-11-14", "gold": [ "A8", "D8", "A7", "F6", "A4", "H4", "F3", "D1", "G1" ], "locations": [ "B7", "C7", "A6", "B6", "C6", "A5", "B5", "D5", "E5", "F5", "D4", "E4", "F4", "D3", "E3", "D2", "E2", "E1" ] } ,
            { "date": "2024-11-15", "gold": [ "B7", "D5", "C4", "D4", "G4", "E2", "F2" ], "locations": [ "A8", "B8", "C8", "A7", "D7", "A6", "B6", "C6", "D6", "H6", "B5", "C5", "E5", "F5", "G5", "E4", "F4", "C3", "D3", "E3", "F3", "G3", "C2", "D2", "C1", "D1", "E1" ] },
            { "date": "2024-11-16", "gold": [ "A7", "G7", "D5", "F5", "A4", "H4", "C3", "H1" ], "locations": [ "F8", "C7", "D7", "F7", "A6", "B6", "C6", "D6", "F6", "G6", "A5", "B5", "C5", "B4", "C4", "D4", "G4", "A3", "D3", "G3", "H3", "D2", "H2" ] },
            { "date": "2024-11-17", "gold": [ "A8", "E8", "A5", "G5", "D3", "F1", "H1" ], "locations": [ "B8", "C8", "D8", "G8", "A7", "C7", "D7", "E7", "G7", "A6", "B6", "D6", "E6", "C5", "F5", "D4", "G4", "E3", "F2", "G1" ] },
            { "date": "2024-11-18", "gold": [ "A8", "G7", "D6", "B4", "F4", "F2", "H2", "D1", "H1" ], "locations": [ "B7", "C7", "D7", "E7", "F7", "B6", "C6", "E6", "F6", "B5", "C5", "D5", "E5", "F5", "C4", "E4", "B3", "G3", "B2", "C2", "D2", "E2", "G2", "B1", "C1", "G1" ] },
            { "date": "2024-11-19", "gold": [ "A8", "C8", "F7", "A6", "C4", "A2", "D1", "F1", "H1" ], "locations": [ "B8", "A7", "C7", "G7", "H7", "B6", "E6", "F6", "G6", "H6", "C5", "G4", "A3", "B3", "C3", "F3", "G3", "D2", "F2", "G2", "E1", "G1" ] },
            { "date": "2024-11-20", "gold": [ "A8", "E8", "A6", "C6", "H6", "E5", "A3", "C3", "H1" ], "locations": [ "A7", "B7", "E7", "B6", "D6", "G6", "A5", "B5", "C5", "F5", "A4", "B4", "C4", "E4", "D3", "E2", "G2", "H2", "G1" ] } ,
            { "date": "2024-11-21", "gold": [ "A8", "E7", "B6", "E5", "B4", "H3", "E2", "H1" ], "locations": [ "G8", "C7", "D7", "F7", "C6", "D6", "E6", "G6", "B5", "C5", "D5", "F5", "G5", "C4", "E4", "F4", "H4", "A3", "D3", "E3", "F3", "C2", "D2", "F2", "H2", "B1" ] },
            { "date": "2024-11-22", "gold": [ "A8", "C3", "D3", "C2", "D2", "H1" ], "locations": [ "A7", "B7", "C7", "D7", "E7", "A6", "B6", "C6", "F6", "G5", "B4", "C4", "D4", "E4", "B3", "E3", "B2", "E2", "B1", "C1", "D1", "E1", "G1" ] },
            { "date": "2024-11-23", "gold": [ "C8", "F8", "C7", "E5", "H5", "A4", "B4", "H3", "F1", "H1" ], "locations": [ "A8", "B8", "G8", "A7", "B7", "D7", "G7", "A6", "B6", "C6", "E6", "A5", "B5", "D5", "F5", "C4", "E4", "A3", "B3", "C3", "G3", "A2", "B2", "F2", "H2", "E1", "G1" ] },
            { "date": "2024-11-24", "gold": [ "A8", "D7", "G6", "A4", "E4", "G4", "E1", "G1" ], "locations": [ "A7", "F7", "G7", "B6", "E6", "F6", "C5", "E5", "F5", "G5", "B4", "C4", "F4", "A3", "B3", "D3", "F3", "G3", "A2", "B2", "E2", "F2", "G2", "D1", "F1" ] },
            { "date": "2024-11-25", "gold": [ "A8", "B8", "E8", "G6", "B5", "D2", "C1", "H1" ], "locations": [ "C8", "D8", "A7", "B7", "E7", "F7", "G7", "H7", "A6", "B6", "C6", "F6", "A5", "F5", "G5", "A4", "B4", "D3", "G3", "C2", "F2", "G2", "B1", "E1", "F1" ] },
            { "date": "2024-11-26", "gold": [ "A8", "B8", "E8", "A5", "C4", "A3", "E2", "H1" ], "locations": [ "C8", "F8", "A7", "E7", "G7", "D6", "G6", "B5", "C5", "D5", "E5", "G5", "H5", "D4", "E4", "H4", "C3", "D3", "E3", "F3", "H3", "A2", "C2", "D2", "F2", "H2", "C1", "D1", "G1" ] },
            { "date": "2024-11-27", "gold": [ "D8", "A7", "E6", "G6", "A4", "H3", "H2", "D1", "H1" ], "locations": [ "C7", "G7", "A6", "B6", "C6", "F6", "A5", "B5", "C5", "E5", "G5", "H5", "F4", "A3", "B3", "E3", "G3", "C2", "D2", "F2", "C1", "E1", "F1" ] },
            { "date": "2024-11-28", "gold": [ "A8", "D8", "G8", "C7", "E6", "G6", "B5", "H5", "F4", "A3", "E3", "C2", "H2", "D1", "G1" ], "locations": [] },
            { "date": "2024-11-29", "gold": [ "C8", "F8", "A7", "C4", "E3", "H3", "A2", "B1", "H1" ], "locations": [ "A8", "B8", "E8", "B7", "C7", "E7", "C6", "D6", "G6", "D5", "E5", "H5", "B4", "E4", "B3", "C3", "E2", "F2", "F1", "G1" ] },
            { "date": "2024-11-30", "gold": [ "A8", "B5", "E5", "A3", "F3", "E1", "H1" ], "locations": [ "A7", "B7", "C7", "E7", "F7", "G7", "A6", "B6", "C6", "D6", "G6", "A5", "C5", "D5", "A4", "C4", "D4", "F4", "G4", "B3", "E3", "G3", "C2", "F2", "H2", "D1", "F1", "G1" ] },
            { "date": "2024-12-01", "gold": [ "A8", "F8", "D6", "B5", "H4", "A3", "D1", "G1" ], "locations": [ "E8", "G8", "A7", "C7", "D7", "E7", "B6", "C6", "E6", "A5", "C5", "D5", "E5", "G5", "H5", "B4", "E4", "F4", "D3", "E3", "G3", "C2", "D2", "F2", "G2", "B1", "C1", "E1", "F1" ] } ,
            { "date": "2024-12-02", "gold": [ "A8", "D8", "G7", "D6", "A5", "C3", "E3", "H2", "H1" ], "guard" : [],"locations": [ "C8", "E8", "B7", "D7", "E7", "F7", "A6", "C6", "G6", "B5", "H5", "B4", "C4", "D4", "E4", "F4", "B3", "F3", "G3", "B2", "C2", "E2", "F2", "G2", "F1" ] },
            { "date": "2024-12-03", "gold": [ "A8", "G7", "D5", "H5", "C4", "G3", "D1", "F1" ], "guard" : [], "locations": [ "C7", "E7", "F7", "E6", "F6", "G6", "B5", "C5", "E5", "F5", "G5", "B4", "E4", "F4", "C3", "D3", "F3", "B2", "C2", "D2", "E2", "B1", "C1", "E1" ] },
            { "date": "2024-12-04", "gold": [ "E8", "A6", "E5", "C4", "D3", "F3", "D1", "G1" ], "guard" : [], "locations": [ "A8", "B8", "C8", "F8", "G8", "A7", "B7", "E7", "F7", "G7", "B6", "D6", "E6", "C5", "D5", "G5", "D4", "E4", "F4", "G4", "H4", "C3", "C2", "D2", "E2", "C1", "E1" ] },
            { "date": "2024-12-05", "gold": [ "A8", "D8", "F5", "H1" ], "guard": [ "♜F8", "♚A7", "♚F2", "♝G2" ], "locations": [ "B8", "C8", "B7", "C7", "D7", "E7", "C6", "F6", "H6", "B5", "G5", "D4", "E4", "F4", "G4", "D3", "G3", "D2", "F1" ] } ,
            { "date": "2024-12-06", "gold": [ "A8", "E8", "G8", "A4", "C3", "G3", "C1", "G1" ], "guard": [ "♚B8", "♚C8", "♚B7", "♞A6", "♚A5", "♚C5", "♞E2", "♞F2", "♞G2", "♞F1" ], "locations": [ "F8", "C7", "D7", "F7", "B6", "C6", "D6", "G6", "B5", "D5", "E5", "F5", "G4", "A3", "E3", "H3", "B2", "D1"]},
            { "date": "2024-12-07", "gold": [ "A8", "B8", "E8", "G6", "D4", "A3", "G1" ], "guard": [ "♞C5", "♝F5", "♝G5", "♞B4", "♞C4", "♝G2", "♚F1" ], "locations": [ "C8", "A7", "B7", "D7", "A6", "C6", "D6", "E6", "A5", "B5", "E5", "A4", "G4", "B3", "G3", "C2", "D2", "E2", "F2" ] },
            { "date": "2024-12-08", "gold": [ "F8", "A5", "A4", "D4", "H3", "E2", "H1" ], "guard": [ "♞C8", "♞C7", "♞C6", "♚G4", "♚H4", "♚G3", "♞G2", "♞H2", "♞G1" ], "locations": [ "E8", "B7", "E7", "F7", "G7", "B6", "B5", "C5", "E5", "B4", "C4", "E4", "A3", "B3", "C3", "D3", "E3", "A2", "B2", "C2" ] },
            { "date": "2024-12-09", "gold": [ "A8", "E8", "D5", "H5", "E3", "D2", "D1", "F1", "H1" ], "guard": [ "♞C8", "♞A7", "♚B7", "♝A6", "♚B6", "♝C6", "♞A5" ], "locations": [ "B8", "D8", "C7", "D7", "F6", "G6", "H6", "B5", "C5", "E5", "G5", "C4", "A3", "C3", "D3", "E2", "F2", "C1", "E1", "G1" ] } ,
            { "date": "2024-12-10", "gold": [ "A8", "D8", "F6", "A5", "A3", "E3", "H1" ], "guard": [ "♚C4", "♜H4", "♚A2", "♚C2", "♚F1", "♚G1" ], "locations": [ "B8", "B7", "G7", "C6", "D6", "E6", "G6", "E5", "F5", "G5", "A4", "B4", "D4", "E4", "F4", "G4", "B3", "D3", "F3", "G3", "B2", "D2", "E2", "F2", "G2" ] },
            { "date": "2024-12-11", "gold": [ "A8", "E8", "C7", "G7", "A4", "H4", "C3", "H3", "G1", "H1" ], "guard": [ "♝G5", "♜H5", "♞F3" ], "locations": [ "A6", "C6", "E6", "A5", "B5", "F5", "B4", "C4", "G4", "A3", "B3", "G3", "A2", "D2", "E2", "F2", "G2", "H2" ] },
            { "date": "2024-12-12", "gold": [ "C8", "A6", "H6", "A5", "E5", "A4", "D4", "A3", "E3", "D2", "G2", "H2", "D1", "E1", "G1" ], "guard": [ "♝B6", "♝C6", "♝D6", "♝E6", "♝B5", "♝C5", "♝D5", "♝G5", "♜H5", "♝B4", "♝C4", "♝E4", "♝B3", "♞C3", "♞F3", "♝B2", "♝C2", "♝B1", "♝C1" ], "locations": [ "D3", "G3", "E2", "F2", "F1" ] },
            { "date": "2024-12-13", "gold": [ "C8", "F8", "A7", "D7", "C6", "F6", "H6", "B4", "A3", "E3", "H3", "G2" ], "guard": [], "locations": [ "B6", "D6", "E6", "B5", "C5", "D5", "E5", "C4", "D4", "F4", "B3", "C3", "D3", "F3", "G3", "A2", "B2", "C2", "E2", "F2", "H2", "C1", "D1", "E1", "F1", "G1" ] },
            { "date": "2024-12-14", "gold": [ "B7", "F7", "D6", "B5", "G5", "D3", "G3", "D2", "E2" ], "guard": [ "♞E7", "♞C6", "♞F5", "♞B4", "♝C3", "♞E3", "♞G2" ], "locations": [ "A8", "B8", "C8", "D8", "E8", "F8", "G8", "A7", "D7", "H7", "A6", "H6", "A5", "H5", "A4", "H4", "A3", "H3", "A2", "C2", "H2", "B1", "C1", "D1", "E1", "F1", "G1", "H1" ] }, 
            { "date": "2024-12-15", "gold": [ "E8", "A7", "A6", "C6", "A4", "C3", "E3", "C1", "F1", "H1" ], "guard": [ "♝D7", "♞E5", "♜B3", "♜A2" ], "locations": [ "H7", "B6", "G6", "A5", "D5", "F5", "H5", "C4", "D4", "E4", "F4", "G4", "D3", "C2", "D2", "F2", "D1", "E1", "G1" ]},
            { "date": "2024-12-16", "gold": [ "A8", "E8", "F7", "A6", "D5", "H4", "F3", "D1", "H1" ], "guard": [ "♝A5", "♝B5", "♝B4", "♝C4", "♝D4", "♝E4", "♝A3", "♝B3", "♝C3", "♝D3", "♝E3", "♝A2", "♝C2", "♝D2", "♝E2", "♝B1", "♝C1", "♝E1" ], "locations": [ "A7", "B7", "C7", "D7", "E7", "F6", "F5", "G4", "H3", "F2", "G2", "G1" ] },
            { "date": "2024-12-17", "gold": [ "B8", "F8", "A7", "G6", "H6", "C5", "E5", "F4", "G4", "D2", "H2" ], "guard": [ "♝D6", "♜H5", "♚A4", "♚B4", "♚C4", "♚A3", "♞B3", "♚B2", "♚C2", "♚C1" ], "locations": [ "G8", "A5", "B5", "C3", "F3", "A2" ] },
            { "date": "2024-12-18", "gold": [ "C7", "F7", "F6", "H6", "A5", "D4", "F4", "G4", "H2", "G1" ], "guard": [ "♜F8", "♜E7", "♜G7", "♝E5", "♝A3", "♞B3", "♝C2" ], "locations": [ "A4", "B4", "C4", "E4", "C3", "F3", "D2" ] },
            { "date": "2024-12-19", "gold": [ "A8", "D8", "G7", "F6", "A5", "D5", "G5", "E1", "G1" ], "guard": [ "♝G8", "♜A7", "♜C7", "♝E7", "♜B6", "♝A4", "♝B4", "♝A3", "♝B3", "♞C3", "♞D3", "♝A2", "♝B2", "♜C2", "♜D1" ], "locations": [ "E8", "F8", "D7", "C4", "D4", "F4", "D2", "E2" ] },
            { "date": "2024-12-20", "gold": [ "C8", "D8", "E8", "B7", "F7", "C6", "G6", "C5", "E5", "B4", "F4", "D3", "H1" ], "guard": [ "♚G4", "♚G3", "♚F2", "♚G2", "♚H2", "♚F1", "♚G1" ], "locations": [ "D7", "A6", "B6", "E6", "F5" ] },
            { "date": "2024-12-21", "gold": [ "D8", "E7", "B6", "F6", "G6", "F5", "H4", "E3", "G3", "F2", "H1" ], "guard": [ "♜A5", "♜A4", "♜C4", "♜A3", "♞A2", "♝B2", "♞B1", "♜C1" ], "locations": [ "A8", "B8", "C8", "A7", "C6", "E6", "C3", "E2" ] },
            { "date": "2024-12-22", "gold": [ "E8", "B7", "E7", "C6", "G6", "B5", "F5", "H5", "A4", "E4", "F4", "G4", "F3", "G2", "D1" ], "guard": [ "♝A3", "♝B2", "♝B1", "♝C1" ], "locations": [ "B8", "G8", "A7", "H7", "H2", "G1", "H1" ] },
            { "date": "2024-12-23", "gold": [ "A8", "G8", "C7", "A6", "F6", "H6", "A5", "D4", "H4", "C3", "H2", "E1", "G1" ], "guard": [ "♞D7", "♞E7", "♞F7", "♜A2", "♜B2" ], "locations": [ "C5", "F5", "H5", "A4", "F3" ] },
            { "date": "2024-12-24", "gold": [ "D8", "B7", "C7", "C6", "E6", "F6", "A5", "B5", "G5", "D4", "H4", "B3", "C3", "G3", "E2", "H2", "C1" ], "guard": [ "♝E8", "♝F7", "♝F5", "♝F4" ], "locations": [ "A8", "B8", "A7", "B4", "F3", "C2", "F2", "D1", "E1", "F1", "G1", "H1" ] },
            { "date": "2024-12-25", "gold": [ "C8", "E7", "F7", "B6", "F6", "G6", "H6", "D5", "E5", "F5", "H5", "G4", "B3", "G3", "D2", "H2", "F1", "G1" ], "guard": [ "♞B5", "♞C5" ], "locations": [ "A8", "B8", "E8", "F8", "A7", "E6", "A5", "A4", "A3", "H1" ] },
            { "date": "2024-12-26", "gold": [ "C8", "D8", "F8", "C7", "F6", "A5", "C5", "H5", "B4", "D4", "C3", "H3", "A2", "F2", "C1", "G1" ], "guard": [ "♜A6", "♜E1" ], "locations": [ "A8", "A7", "H7", "A3", "H1" ] },
            { "date": "2024-12-27", "gold": [ "F8", "A7", "C7", "E6", "G6", "A5", "E5", "A4", "C4", "D4", "G4", "E3", "H2", "C1", "G1" ], "guard": [ "♞G8", "♞G7", "♞C5", "♜H4", "♞A3", "♜D3", "♜D2", "♜D1" ], "locations": [ "A8", "B8", "E8", "F7", "B6", "H5", "B2", "H1" ] },
            { "date": "2024-12-28", "gold": [ "B8", "F8", "D7", "E7", "H7", "A6", "B6", "G6", "C5", "D5", "G5", "A4", "H3", "F2", "D1" ], "guard": [ "♚A3", "♚B3", "♚C3", "♚A2", "♚B2", "♚C2", "♚B1", "♚C1" ], "locations": [ "A8", "A7", "H2", "F1", "G1", "H1" ] },
            { "date": "2024-12-29", "gold": [ "D8", "E8", "G8", "B7", "D7", "F7", "F6", "H6", "A5", "B5", "E5", "H5", "A3", "C3", "F3", "G3", "C1", "E1", "F1" ], "guard": [ "♞G7", "♞G6", "♜A2", "♜B2" ], "locations": [ "A8", "B8", "A7", "F5", "G4", "H3", "H1" ] },
            { "date": "2024-12-30", "gold": [ "A8", "D7", "F7", "A6", "G5", "H5", "A4", "D4", "H3", "F1" ], "guard": [ "♜A3", "♝C3", "♜A2", "♝B2", "♞D2", "♚B1" ], "locations": [ "A7", "B7", "C7", "E7", "F6", "A5", "B5", "C5", "D5", "E5", "H4", "B3", "D3", "F3", "G3", "C2", "F2", "G2", "H2", "C1", "D1", "G1", "H1" ] },
            { "date": "2024-12-31", "gold": [ "C8", "A7", "E7", "D6", "G6", "B5", "G5", "H5", "E4", "F4", "A3", "E3", "G3", "G1" ], "guard": [ "♜G7", "♞H6", "♜G4", "♜H3" ], "locations": [ "F8", "G8", "F6", "C4", "H4", "B3", "C2", "E2", "G2", "B1", "D1", "F1" ] },
            { "date": "2025-01-01", "gold": [ "A8", "E8", "G8", "F7", "A6", "F6", "H6", "A5", "B5", "D5", "E5", "H5", "F4", "A3", "B3", "D3", "E3", "G2", "E1" ], "guard": [ "♚B7", "♚C7", "♝F5", "♝A4" ], "locations": [ "F3", "B2", "F2", "B1", "F1" ] },
            { "date": "2025-01-02", "gold": [ "B8", "B7", "E7", "C6", "G6", "C5", "E5", "F5", "F4", "H4", "D2", "G2", "E1" ], "guard": [ "♚A4", "♚B4", "♚C4", "♚D4", "♚A3", "♚B3", "♚C3", "♚D3", "♚A2", "♚B2", "♚C2", "♚B1", "♚C1", "♚D1" ], "locations": [ "A8", "A7", "A6", "E4", "H2", "G1", "H1" ] },
            { "date": "2025-01-03", "gold": [ "B8", "G8", "D7", "A6", "B6", "F6", "D5", "E5", "F5", "B4", "C4", "D3", "G3", "B2", "E2", "C1", "D1", "F1", "G1" ], "guard": [ "♜H5", "♜H4", "♜H3", "♜H2", "♜H1" ], "locations": [ "A8", "A7", "B7", "D4", "B3" ] } ,
            { "date": "2025-01-04", "gold": [ "B8", "F8", "D7", "H7", "C6", "E6", "G6", "F5", "H5", "B4", "C4", "G4", "H4", "H3", "A2", "C2", "G2", "E1" ], "guard": [ "♝A3", "♝C3" ], "locations": [ "A8", "H1" ] },
            { "date": "2025-01-05", "gold": [ "A8", "E8", "C7", "F7", "A6", "B6", "D6", "A4", "C4", "F4", "E3", "H3", "C1", "E1", "F1", "H1" ], "guard": [], "locations": [ "C8", "G7", "E6", "F6", "H6" ] },
            { "date": "2025-01-06", "gold": [ "C8", "F8", "A7", "E7", "G7", "B6", "D6", "G6", "B5", "D5", "G5", "H5", "F4", "H4", "A3", "C3", "E3", "G3", "C2", "F2", "E1", "F1" ], "guard": [ "♞H6", "♚G4" ], "locations": [ "D8", "E8", "C7", "D7", "C6", "C5", "B4", "C4", "B3", "H3", "A2", "G2", "H2", "G1", "H1" ] },
            { "date": "2025-01-07", "gold": [ "B8", "F8", "A7", "C7", "H7", "A6", "E6", "H6", "C5", "G5", "B4", "H4", "A3", "F3", "G3", "B2", "C2", "E1", "G1", "H1" ], "guard": [ "♜G8", "♜G6" ], "locations": [ "E8", "G7", "F6", "F5" ] },
            { "date": "2025-01-08", "gold": [ "B8", "F8", "H8", "D7", "F7", "A6", "D6", "F6", "G6", "B5", "G5", "B4", "E4", "G4", "H4", "C3", "D3", "B2", "C2", "F2", "G2", "E1" ], "guard": [ "♜A5", "♜E5", "♜G3" ], "locations": [ "A8", "A7", "B7", "C7", "A2", "H2", "B1", "G1", "H1" ] },
            { "date": "2025-01-09", "gold": [ "E8", "C7", "G7", "B6", "F6", "A5", "C5", "F4", "H4", "A3", "D3", "C2", "E2", "H2", "B1", "D1", "G1" ], "guard": [ "♜C8", "♜D8", "♜H1" ], "locations": [ "A8", "B8", "A7", "B7", "H7", "A6", "H6", "H5", "A2" ] },
            { "date": "2025-01-10", "gold": [ "D8", "C7", "G7", "F6", "G6", "H6", "A5", "E5", "C4", "F4", "B3", "C3", "B2", "E2", "H2", "C1", "G1" ], "guard": [ "♜C8", "♜G8", "♜G4" ], "locations": [ "A8", "B8", "A7", "B7", "H5", "H4", "A3", "H3", "A2" ] },
            { "date": "2025-01-11", "gold": [ "B8", "C8", "G8", "C6", "H6", "A5", "C5", "F5", "G5", "B4", "D4", "F3", "G3", "D1", "G1" ], "guard": [ "♜A7", "♜A6", "♜C2", "♜D2", "♜E2" ], "locations": [ "A8", "H4", "H3", "H2", "H1" ] } ,
            { "date": "2025-01-12", "gold": [ "C8", "F8", "F7", "H7", "A6", "D6", "G6", "C5", "E5", "G5", "C4", "B3", "D3", "F3", "D2", "E2", "C1", "G1" ], "guard": [ "♜D8", "♜E8", "♜D7", "♜E7", "♚D4", "♚E3" ], "locations": [ "A8", "B8", "A7", "B7", "H2", "H1" ] },
            { "date": "2025-01-13", "gold": [ "E8", "C7", "G7", "B6", "F6", "C5", "D5", "A4", "C4", "D4", "H4", "D3", "B2", "C2", "F2", "E1" ], "guard": [ "♜A6", "♜B4", "♜D2" ], "locations": [ "A8", "B8", "A7", "B7", "F5", "F4", "G4", "H2", "G1", "H1" ] },
            { "date": "2025-01-14", "gold": [ "B8", "A7", "D6", "G6", "A5", "C5", "E5", "F4", "G4", "A3", "D3", "F3", "H3", "H2", "B1", "E1", "H1" ], "guard": [ "♜A2", "♜G2" ], "locations": [ "A8", "C8", "D8", "G8", "H8", "C7", "E6", "F5", "G5", "H4", "B2", "C2", "D2", "E2", "F2" ] },
            { "date": "2025-01-15", "gold": [ "C8", "E7", "B6", "G6", "D5", "F5", "H4", "E3", "G2", "H2", "G1" ], "guard": [ "♚A4", "♚D4", "♚A3", "♚C3", "♚A2", "♚B2", "♚C2", "♚B1", "♚C1", "♚D1" ], "locations": [ "A8", "A7", "B7", "C7", "B4", "C4", "B3", "D3", "D2", "H1" ] } ,
            { "date": "2025-01-16", "gold": [ "A8", "E8", "B7", "D7", "E6", "G6", "B4", "C4", "F4", "D3", "H3", "C2", "G2" ], "guard": [ "♜G7" ], "locations": [ "F8", "G8", "F7", "C1", "D1", "E1", "F1", "G1", "H1" ] } ,
            { "date": "2025-01-17", "gold": [ "C7", "E7", "C6", "F6", "G6", "A5", "C5", "E5", "B4", "H4", "F3", "F2", "H2", "G1" ], "guard": [ "♝B2" ], "locations": [ "A8", "B8", "E8", "F8", "G8", "A7", "B7", "A4", "A3", "D2", "C1", "D1" ] },
            { "date": "2025-01-18", "gold": [ "A8", "C8", "E8", "C7", "E7", "F7", "G7", "B6", "D5", "E5", "F4" ], "guard": [ "♚H6", "♚A5", "♚B5", "♚C5", "♚H5", "♚H4" ], "locations": [ "A6", "C6", "D6", "E6", "F6", "G6", "A4", "B4", "C4", "E4", "G4", "E3", "B2", "C2", "E2", "F2", "G2" ] },
            { "date": "2025-01-19", "gold": [ "D8", "F8", "B7", "D7", "F7", "H7", "B6", "D6", "A5", "C5", "E5", "G5", "B4", "C4", "H4", "G3", "H3", "B2", "F2", "H2", "D1", "E1", "G1" ], "guard": [ "♞B8", "♜G7" ], "locations": [ "A8", "A7", "A6", "A4", "A3", "A2", "H1" ] },
            { "date": "2025-01-20", "gold": [ "D8", "E8", "G8", "B7", "E7", "F7", "G7", "C6", "D6", "F6", "H5", "G4", "G3", "F2", "H1" ], "guard": [ "♞A5", "♞B5", "♞C5", "♞D5", "♞E5", "♞A4", "♞B4", "♞C4", "♞D4", "♞E4", "♞A3", "♞B3", "♞C3", "♞D3", "♞E3", "♞A2", "♞B2", "♞C2", "♞D2", "♞E2", "♞B1", "♞C1", "♞D1", "♞E1" ], "locations": [ "A8", "B8", "A7", "H7", "H6", "F5", "F4", "F3", "F1", "G1" ] },
            { "date": "2025-01-21", "gold": [ "C7", "E7", "B6", "E5", "G5", "H4", "E3", "D2", "E1" ], "guard": [ "♞F8", "♞G8", "♞E6", "♞G6", "♞H6", "♞D4", "♞G4", "♞F3", "♞H2" ], "locations": [ "A8", "B8", "C8", "A7", "B7", "A6", "A5", "A4", "B4", "A3", "B3", "G2", "G1", "H1" ] } ,
            { "date": "2025-01-22", "gold": [ "C8", "D8", "D7", "B6", "D6", "F6", "A5", "D5", "E5", "E4", "F4", "H4", "C3", "D3", "E3", "F3", "B2", "H2", "E1", "G1" ], "guard": [ "♝G8" ], "locations": [ "A8", "B8", "E8", "F8", "A7", "A6", "B1", "C1", "D1", "H1" ] },
            { "date": "2025-01-23", "gold": [ "C8", "G8", "A7", "D7", "F7", "B6", "F6", "H6", "C5", "H5", "F3", "H3", "A2", "C2", "F1" ], "guard": [ "♝E4", "♝F4", "♜D2", "♜E2", "♜E1" ], "locations": [ "A8", "B8", "D8", "E8", "F8", "B7", "C7", "E7", "G7", "H7", "C6", "D6", "E6", "G6", "B4", "B3", "G2", "H2", "G1", "H1" ] },
            { "date": "2025-01-24", "gold": [ "A8", "H5", "H1" ], "guard": [ "♜B8", "♜A7", "♜B7", "♞H2", "♞G1" ], "locations": [ "C8", "D8", "E8", "F8", "C7", "E7", "G7", "B6", "C6", "D6", "F6", "G6", "B5", "C5", "E5", "F5", "A4", "D4", "G4", "H4", "B3", "C3", "E3", "F3", "H3", "A2", "D2", "E2", "F2", "G2", "B1", "C1" ] },
            { "date": "2025-01-25", "gold": [ "B8", "H2" ], "guard": [ "♞A5", "♞C5", "♝E5", "♜A3", "♞B3", "♝C3", "♞E3", "♜A2", "♝B2", "♞C2", "♜B1", "♜C1", "♞E1" ], "locations": [ "E8", "E7", "A6", "B6", "C6", "E6", "F6", "G6", "H6", "F5", "F3", "F2", "F1" ] },
            { "date": "2025-01-26", "gold": [ "F8", "A7", "F5", "C3", "H1" ], "guard": [ "♜B8", "♜C8", "♚A6", "♚A5", "♚A4", "♚G3", "♚H3", "♚F2", "♚G2", "♚H2", "♚F1", "♚G1" ], "locations": [ "E8", "B7", "C7", "E7", "B6", "C6", "E6", "F6", "B5", "C5", "B4", "C4", "E4", "F4", "B3", "B2", "C2", "D2" ] },
            { "date": "2025-01-27", "gold": [ "E7", "G7", "C5", "E5", "F4", "H4", "A3", "C3", "G3", "D2", "C1", "E1" ], "guard": [ "♜D7", "♜H7", "♜C6", "♜H6", "♜H5", "♜A2", "♜B1" ], "locations": [ "A8", "B8", "C8", "D8", "A7", "B7", "C7", "A6", "B6", "A5", "H3", "G2", "H2", "F1", "G1", "H1" ] },
            { "date": "2025-01-28", "gold": [ "C8", "B7", "F7", "D6", "H6", "F5", "H3", "F1" ], "guard": [ "♞A5", "♞B5", "♞C5", "♞D5", "♞E5", "♞A4", "♞B4", "♞C4", "♞D4", "♞E4", "♞A3", "♞B3", "♞C3", "♞D3", "♞E3", "♞A2", "♞B2", "♞C2", "♞D2", "♞E2", "♞B1", "♞C1", "♞D1", "♞E1" ], "locations": [ "A8", "B8", "A7", "H2", "G1", "H1" ] } ,
            { "date": "2025-01-29", "gold": [ "A8", "D8", "F8", "G8", "B7", "H7", "E6", "F6", "A5", "C5", "G5", "E3", "H3", "C2", "D2", "B1", "H1" ], "guard": [], "locations": [ "A4", "A3", "A2" ] },
            { "date": "2025-01-30", "gold": [ "C8", "E7", "F7", "B6", "H6", "F5", "A4", "D4", "H4", "E3", "B2", "F2", "D1" ], "guard": [], "locations": [ "A8", "B8", "D8", "E8", "F8", "A7", "B7", "C7", "D7", "A6", "C6", "D6", "A5", "B5", "C5", "D5", "B4", "E4", "A3", "F3", "A2", "E2", "F1", "G1" ] } ,
            { "date": "2025-01-31", "gold": [ "A8", "D8", "F8", "A7", "B6", "C5", "D5", "F5", "G5", "E4", "H4", "C3", "G3", "E1" ], "guard": [ "♞F4", "♞G4", "♞E3", "♞F3" ], "locations": [] },
            { "date": "2025-02-01", "gold": [ "D8", "E7", "B6", "G6", "D5", "F5", "G5", "H4", "B3", "E3", "G3", "D2", "H2", "F1" ], "guard": [ "♜C3", "♜C2", "♜C1", "♜E1" ], "locations": [ "A8", "B8", "A7", "H7", "A6", "H6", "H5", "B2", "B1" ] },
            { "date": "2025-02-02", "gold": [ "A8", "E8", "C7", "F7", "B6", "C6", "D5", "A4", "B4", "F4", "H4", "F3", "C2", "D2", "G2", "B1", "E1" ], "guard": [ "♞D4", "♞E4" ], "locations": [ "D6", "C5", "E5", "C4", "C3", "D3", "B2", "C1" ] },
            { "date": "2025-02-03", "gold": [ "B8", "A7", "C5", "E5", "H5", "A3", "C3", "G3", "D2", "F2", "C1", "H1" ], "guard": [], "locations": [ "E8", "F8", "G8", "E7", "F7", "G7", "E6", "F6", "G6", "F5", "G5", "E4", "F4", "G4", "E3", "F3", "E2", "G2", "E1", "F1", "G1" ] },
            { "date": "2025-02-04", "gold": [ "B8", "A7", "C7", "E7", "F6", "A5", "C5", "B4", "D4", "B3", "E3", "F3", "C2", "H2", "F1" ], "guard": [ "♜A2", "♜B2" ], "locations": [ "A8", "F8", "H6", "E4", "F4", "G4", "H4", "G2", "G1", "H1" ] } ,
            { "date": "2025-02-05", "gold": [ "A8", "B8", "F8", "G8", "C7", "D7", "A6", "E6", "C5", "F5", "G5", "B4", "H4", "B3", "D3", "G2", "E1" ], "guard": [ "♝A2", "♝B2", "♝C2", "♝D2" ], "locations": [ "A5", "A4", "A3", "H2", "G1", "H1" ] },
            { "date": "2025-02-06", "gold": [ "C8", "E7", "B6", "D6", "G6", "A5", "F5", "D4", "G4", "H4", "F2", "H2", "E1", "G1" ], "guard": [ "♜A4", "♜B4", "♜C2", "♜B1", "♜C1" ], "locations": [ "A8", "B8", "E8", "F8", "G8", "A7", "B7", "H1" ] },
            { "date": "2025-02-07", "gold": [ "D8", "B7", "F7", "C6", "A5", "E5", "G4", "E3", "G2", "E1" ], "guard": [ "♝A3", "♚B3", "♝C3", "♚A2", "♝B2", "♚C2", "♚B1", "♝C1" ], "locations": [ "A8", "B8", "A7", "H7", "A6", "H6", "H5", "A4", "B4", "C4", "D4", "H4", "D3", "H3", "D2", "H2", "D1", "G1", "H1" ] } ,
            { "date": "2025-02-08", "gold": [ "E8", "B7", "E7", "D6", "G6", "B4", "F4", "G4", "B3", "D3", "H3", "E2", "B1", "C1", "D1", "G1" ], "guard": [ "♜A4", "♜A3" ], "locations": [ "A8", "B8", "A7", "F7", "G7", "H7", "H2", "H1" ] },
            { "date": "2025-02-09", "gold": [ "B8", "A7", "G7", "D6", "H6", "C5", "G5", "B4", "F4", "H4", "A3", "C3", "G3", "D2", "C1", "E1" ], "guard": [ "♜A2", "♝B2", "♜B1" ], "locations": [ "A8", "H3", "G2", "H2", "F1", "G1", "H1" ] },
            { "date": "2025-02-10", "gold": [ "C8", "A7", "E7", "C6", "G6", "D5", "H5", "F4", "E3", "G3", "F1" ], "guard": [ "♜A4", "♜B4", "♜A3", "♜B3", "♞C2", "♞D2", "♞C1", "♞D1" ], "locations": [ "A8", "B8", "H3", "G2", "H2", "G1", "H1" ] },
            { "date": "2025-02-11", "gold": [ "D8", "B7", "F7", "D6", "H6", "A5", "F5", "C4", "D4", "G4", "B3", "D2", "H2", "F1" ], "guard": [ "♞A6", "♞G5", "♞H5", "♞A4", "♞H4", "♞A3", "♞H3" ], "locations": [ "A8", "B8", "E8", "F8", "G8", "A7", "G1", "H1" ] },
            { "date": "2025-02-12", "gold": [ "D8", "E8", "C7", "G7", "D6", "F6", "A5", "E4", "H4", "C3", "D2", "F2", "E1" ], "guard": [ "♝D5", "♝D4", "♝D3" ], "locations": [ "A8", "B8", "C8", "A7", "B7", "A6", "H3", "G2", "H2", "G1", "H1" ] },
            { "date": "2025-02-13", "gold": [ "E8", "C7", "G7", "A6", "C5", "E5", "F5", "D4", "H4", "G3", "F2", "G2", "E1" ], "guard": [ "♚A5", "♚A4", "♚B4", "♚C4", "♚A3", "♚B3", "♚C3", "♚D3", "♚A2", "♚B2", "♚C2", "♚D2", "♚B1", "♚C1", "♚D1" ], "locations": [ "A8", "B8", "C8", "A7", "B7", "H2", "G1", "H1" ] },
            { "date": "2025-02-14", "gold": [ "A7", "E7", "G6", "C5", "F4", "H4", "A3", "C3", "E3", "G3", "H3", "E1", "G1" ], "guard": [ "♜A2", "♝B2", "♜B1" ], "locations": [ "A8", "F8", "G8", "F7", "G7", "H7", "H6", "F5", "H5", "H2", "H1" ] }  
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
