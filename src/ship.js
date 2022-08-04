 export const lengths = {
    carrier: 5,
    battleship: 4,
    destroyer: 3,
    submarine: 3,
    patrol: 2
}

export function createShip(ship) {
    //asign ship length from lengths object
    const shipLength = lengths[ship];

    //creating the array that tracks where the ship has been hit
    let hits = [];
    for (let i = 0; i < shipLength; i++) {
        hits[i] = 0
    }

    //assigns a hit to the ship at a given index
    function receiveHit(index) {
        hits[index] = 1;
        isSunk();
    }

    //checks whether the hits array contains all "1"
    function isSunk(){
        if(hits[0] && hits[1] & hits[2] & hits[3] === 1) {
            return true
        } else {
            return false
        } 
    }

    return {
        type: ship,
        length: shipLength,
        hits,
        receiveHit,
        isSunk
    }
}