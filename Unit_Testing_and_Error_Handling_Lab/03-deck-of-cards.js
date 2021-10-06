function deckOfCards(cards) {
    function createCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663 '
        };
    
        if (!validFaces.includes(face)) {
            throw Error();
        }
        if (!Object.keys(validSuits).includes(suit)) {
            throw new Error();
        }

        return {
            face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit
            }
        }
    }

    const result = [];

    for (let card of cards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);
        try {
            result.push(createCard(face, suit));
        } catch {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(result.join(' '))
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);