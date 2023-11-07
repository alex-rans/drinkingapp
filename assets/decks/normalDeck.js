export function NormalDeck(names) {
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
        const shuffled = names.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 2);
        return selected
    }

    const types = {
        DARE: 'Dare',
        GAME: 'Game',
        NORMAL: 'Normal'
    }

    // names = JSON.parse(names)

    const deck = {
        name: "Normal",
        cards: [
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(2, 4)} sips if you ever let someone wear your underwear`
            },
            {
                type: types.NORMAL,
                challenge: `The first players to lick their elbow can give out a shot. Players who try but do not succeed have to drink 4 sips`
            },
            {
                type: types.GAME,
                challenge: `Zodiac signs. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName()[0]} starts`,
            },
            {
                type: types.GAME,
                challenge: `Car brands. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName()[0]} starts`,
            },
            {
                type: types.GAME,
                challenge: `Would you rather be the richest person on earth or be immortal? Everyone vote at once, losing group takes 4 sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, give ${GetRandonInt(2, 4)} sips to the smartest player`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, take as many penalties as there are players`
            },
            {
                type: types.NORMAL,
                challenge: `If you're a nailbiter, drink ${GetRandonInt(2, 4)} sips`
            },
            {
                type: types.NORMAL,
                challenge: `Players who will sleep alone tonight, give out ${GetRandonInt(3, 6)} sips`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, give out one sip for every guy in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, give out one sip for every girl in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, drink one sip for every guy in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, give out one sip for every girl in the group`
            },
            {
                type: types.NORMAL,
                challenge: `Everyone who donated blood can give out a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, give out ${GetRandonInt(2, 3)} sips to a player who is sillier than you. If there are none, you drink them`
            },
            {
                type: types.NORMAL,
                challenge: `Drink a 2 sips if you've ever used a Ouija board`
            },
            {
                type: types.GAME,
                challenge: `Everyone has to take turns telling a joke or drink two sips. The first person who makes even the tiniest snicker or smile has to drink ${GetRandonInt(3, 4)} sips. ${GetRandomName()}, you start.`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName()[0]} has to send 'I love you' via text message to a person chosen by ${GetRandomName()[1]}`,
                punishment: `take a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, drink ${GetRandonInt(1, 3)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, tell us ${GetRandomName()[1]}'s zodiac sign or drink ${GetRandonInt(1, 2)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName()[0]}, if you've ever seen ${GetRandomName()[1]} do a shot, give out ${GetRandonInt(1, 2)} sips. If not you have to take them yourself`,
            },

        ]
    }

    return deck;
}

