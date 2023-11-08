import {GetRandonInt, GetRandomDirection, GetRandomName, GetTypes} from '../deckFunctions'

export function TestDeck(names) {
    const types = GetTypes();

    // names = JSON.parse(names)

    const deck = {
        name: "Test",
        cards: [
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)[0]} has to give one player a shot and the rest of the players a little kiss.`,
            },
        ]
    }

    return deck;
}
