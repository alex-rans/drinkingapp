import {GetRandonInt, GetRandomDirection, GetRandomName, GetTypes} from '../deckFunctions'

export function TestDeck(names) {
    const types = GetTypes();

    // names = JSON.parse(names)

    const deck = {
        name: "Test",
        cards: [
            {
                type: types.JOKER,
                challenge: `Shadow wizard money gang`,
              },
        ]
    }

    return deck;
}
