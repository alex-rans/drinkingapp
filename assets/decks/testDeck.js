export function TestDeck(names) {
    let lastname = ''
    function GetRandonInt(min, max) {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        return number;
    }

    function GetRandomDirection() {
        const randomBoolean = () => Math.random() >= 0.5;
        if (randomBoolean()) {
            return 'left'
        }
        else return 'right'
    }

    function GetRandomName() {
        const randomname = names[Math.floor(Math.random() * names.length)];
        if (randomname !== lastname) {
            lastname = randomname
            return randomname
        }
        GetRandomName()
    }

    const types = {
        DARE: 'Dare',
        GAME: 'Game',
        NORMAL: 'Normal'
    }

    // names = JSON.parse(names)

    const deck = {
        name: "Test",
        cards: [
            {
                type: types.GAME,
                challenge: `TEST`
            },           
        ]
    }

    return deck;
}
