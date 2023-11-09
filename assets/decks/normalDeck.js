import { GetRandonInt, GetRandomDirection, GetRandomName, GetTypes } from '../deckFunctions'

export function NormalDeck(names = ['das', 'dsak']) {
    const types = GetTypes();

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
                challenge: `Zodiac signs. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName(names)[0]} starts`,
            },
            {
                type: types.GAME,
                challenge: `Car brands. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName(names)[0]} starts`,
            },
            {
                type: types.GAME,
                challenge: `Would you rather be the richest person on earth or be immortal? Everyone vote at once, losing group takes 4 sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give ${GetRandonInt(2, 4)} sips to the smartest player`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, take as many penalties as there are players`
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
                challenge: `${GetRandomName(names)[0]}, give out one sip for every guy in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give out one sip for every girl in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, drink one sip for every guy in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, drink one sip for every girl in the group`
            },
            {
                type: types.NORMAL,
                challenge: `Everyone who donated blood can give out a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give out ${GetRandonInt(2, 3)} sips to a player who is sillier than you. If there are none, you drink them`
            },
            {
                type: types.NORMAL,
                challenge: `Drink a 2 sips if you've ever used a Ouija board`
            },
            {
                type: types.GAME,
                challenge: `Everyone has to take turns telling a joke or drink two sips. The first person who makes even the tiniest snicker or smile has to drink ${GetRandonInt(3, 4)} sips. ${GetRandomName(names)}, you start.`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)[0]} has to send 'I love you' via text message to a person chosen by ${GetRandomName(names)[1]}`,
                punishment: `take a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, drink ${GetRandonInt(1, 3)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, tell us ${GetRandomName(names)[1]}'s zodiac sign or drink ${GetRandonInt(1, 2)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, if you've ever seen ${GetRandomName(names)[1]} do a shot, give out ${GetRandonInt(1, 2)} sips. If not you have to take them yourself`,
            },
            {
                type: types.GAME,
                challenge: `Ways of making a baby stop crying. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)[0]}, you start`,
            },
            {
                type: types.NORMAL,
                challenge: `Every drink a sip`,
            },
            {
                type: types.GAME,
                challenge: `Take turns showing your tattoos and piercings. Players who don't have any drink 2 sips.`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]} any player who doesn't follow you on instagram has to drink a sip.`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink a sip if you didn't pay for anythign tonight. Cheapskate.`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give out as many sips as you have siblings`,
            },
            {
                type: types.NORMAL,
                challenge: `Players with brown eyes, drink a sip`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)[0]}, tell us the name and age of each player. The person who's name or age you don't know can give out ${GetRandonInt(1, 2)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, drink a sip without using your hands.`,
            },
            {
                type: types.NORMAL,
                challenge: `The person who last filled their glass has to drink a sip.`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]} and ${GetRandomName(names)[1]}, hook arms and take a sip together.`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give out one sip for every good quality that ${GetRandomName(names)[1]} has`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give 2 sips to a player who's shorter than you. If there are none, you drink them.`,
            },
            {
                type: types.NORMAL,
                challenge: `Blond-haired players can give out 1 sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Brown-haired players can give out 1 sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Players with dyed hair can give out 1 sip`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)[0]}, truth or dare? ${GetRandomName(names)[1]} can choose the question or the dare`,
                punishment: `Drink ${GetRandonInt(1, 3)} sips if you refuse`
            },
            {
                type: types.NORMAL,
                challenge: `The next person to use their phone (besides this one) has to drink a shot`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, tell us ${GetRandomName(names)[1]}'s age or drink a sip `,
            },
            {
                type: types.GAME,
                challenge: `Things you can smoke. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)[0]}, you start`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever peed in the sink`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]} has to choose the next song and has to take a sip for every player who hates it`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]} has to choose the next song. Players who hate it have to take a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Ketamine snorters drink 1 sip`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give out 2 sips to the most attractive player`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who study psychology drink a sip.`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who have a cat drink a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who have a dog drink a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Smokers drink a sip`,
            },
            {
                type: types.GAME,
                challenge: `Waterfall! You have to start drinking when the player on your right drinks and can only stop when they stop. ${GetRandomName(names)[0]} starts`,
            },
            {
                type: types.NORMAL,
                challenge: `People who stayed in bed past 10AM today, drink 2 sips.`,
            },
            {
                type: types.NORMAL,
                challenge: `Weed smokers drink 1 sip`,
            },
            {
                type: types.NORMAL,
                challenge: `The last player to shout "bitch" has to drink a shot`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink 2 sips if your coping mechanisms include alcohol and/or drugs`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, close your eyes. If you can say what everyone has in their glass, give out ${GetRandonInt(2, 4)} sips. If not, you take them`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(2, 4)} sips if you've ever cheated`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)[0]} has to give one player a shot and the rest of the players a little kiss.`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink a sip if you've ever had a relationship last less than a day`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who have been arrested take a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give ${GetRandonInt(2, 3)} sips to the player you know the most`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give ${GetRandonInt(2, 3)} sips to the player you know the least`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, hook your arm under you leg and drink 2 sips`,
            },
            {
                type: types.NORMAL,
                challenge: `If you're single, give 2 sips to another person`,
            },
            {
                type: types.NORMAL,
                challenge: `If you're in a relationship, give 2 sips to another person`,
            },
            {
                type: types.NORMAL,
                challenge: `If you're single, drink 2 sips`,
            },
            {
                type: types.NORMAL,
                challenge: `If you're in a relationship, drink 2 sips`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(1, 2)} sips if you have to go to work tomorrow (Then cry is silence)`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who are bald have to drink a shot`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who are currently drink Cara, drink ${GetRandonInt(2, 4)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `If you've ever had a crush on your teacher drink ${GetRandonInt(2, 4)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who ate 3 meals today can give out ${GetRandonInt(1, 3)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `Iphone users drink a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Android users drink a sip`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)[0]}, Say something you've never done. All players who have done it drink ${GetRandonInt(2, 3)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)[0]}, give out 1 sip for every other player`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)[0]} and ${GetRandomName(names)[0]}, play rock paper scissors. The loser drinks ${GetRandonInt(3, 6)} sips`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)[0]}, make a jungle juice with whatever beverages there are in the room. ${GetRandomName(names)[1]} has to drink them.`,
                punishment: `Drink ${GetRandonInt(3, 6)} sips if you refuse to drink them`
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)[0]}, snort a line of pepper or salt`,
                punishment: `Drink ${GetRandonInt(2, 4)} if you refuse`
            },

        ]
    }
    return deck;
}

