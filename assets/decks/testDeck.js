import {GetRandonInt, GetRandomDirection, GetRandomName, GetTypes} from '../deckFunctions'

export function TestDeck(names) {
    const types = GetTypes();

    // names = JSON.parse(names)

    const deck = {
        name: "Test",
        cards: [
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)} ${GetRandomName(names)}`,
            },
        ]
    }

    return deck;
}
