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
                challenge: `Zodiac signs. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName(names)} starts`,
            },
            {
                type: types.GAME,
                challenge: `Car brands. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName(names)} starts`,
            },
            {
                type: types.GAME,
                challenge: `Would you rather be the richest person on earth or be immortal? Everyone vote at once, losing group takes 4 sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give ${GetRandonInt(2, 4)} sips to the smartest player`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, take as many sips as there are players`
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
                challenge: `${GetRandomName(names)}, give out one sip for every guy in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out one sip for every girl in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink one sip for every guy in the group`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink one sip for every girl in the group`
            },
            {
                type: types.NORMAL,
                challenge: `Everyone who donated blood can give out a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out ${GetRandonInt(2, 3)} sips to a player who is sillier than you. If there are none, you drink them`
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
                challenge: `${GetRandomName(names)} has to send 'I love you' via text message to a person chosen by ${GetRandomName(names)}`,
                punishment: `take a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink ${GetRandonInt(1, 3)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, tell us ${GetRandomName(names)}'s zodiac sign or drink ${GetRandonInt(1, 2)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, if you've ever seen ${GetRandomName(names)} do a shot, give out ${GetRandonInt(1, 2)} sips. If not you have to take them yourself`,
            },
            {
                type: types.GAME,
                challenge: `Ways of making a baby stop crying. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
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
                challenge: `${GetRandomName(names)} any player who doesn't follow you on instagram has to drink a sip.`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink a sip if you didn't pay for anythign tonight. Cheapskate.`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out as many sips as you have siblings`,
            },
            {
                type: types.NORMAL,
                challenge: `Players with brown eyes, drink a sip`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)}, tell us the name and age of each player. The person who's name or age you don't know can give out ${GetRandonInt(1, 2)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink a sip without using your hands.`,
            },
            {
                type: types.NORMAL,
                challenge: `The person who last filled their glass has to drink a sip.`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)} and ${GetRandomName(names)}, hook arms and take a sip together.`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out one sip for every good quality that ${GetRandomName(names)} has`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give 2 sips to a player who's shorter than you. If there are none, you drink them.`,
            },
            {
                type: types.NORMAL,
                challenge: `Blond-haired players ${GetRandomName(['give out', 'drink'])} 1 sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Brown-haired players ${GetRandomName(['give out', 'drink'])} 1 sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Players with dyed hair ${GetRandomName(['give out', 'drink'])} 1 sip`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)}, truth or dare? ${GetRandomName(names)} can choose the question or the dare`,
                punishment: `Drink ${GetRandonInt(1, 3)} sips if you refuse`
            },
            {
                type: types.NORMAL,
                challenge: `The next person to use their phone (besides this one) has to drink a shot`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, tell us ${GetRandomName(names)}'s age or drink a sip `,
            },
            {
                type: types.GAME,
                challenge: `Things you can smoke. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever peed in the sink`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)} has to choose the next song and has to take a sip for every player who hates it`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)} has to choose the next song. Players who hate it have to take a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Ketamine snorters drink 1 sip`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out 2 sips to the most attractive player`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who study psychology drink a sip.`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who study engineering drink a sip.`,
            },
            {
                type: types.NORMAL,
                challenge: `Players who study IT drink a sip.`,
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
                challenge: `Waterfall! You have to start drinking when the player on your right drinks and can only stop when they stop. ${GetRandomName(names)} starts`,
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
                challenge: `${GetRandomName(names)}, close your eyes. If you can say what everyone has in their glass, give out ${GetRandonInt(2, 4)} sips. If not, you take them`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(2, 4)} sips if you've ever cheated`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)} has to give one player a shot and the rest of the players a little kiss.`,
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
                challenge: `${GetRandomName(names)}, give ${GetRandonInt(2, 3)} sips to the player you know the most`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give ${GetRandonInt(2, 3)} sips to the player you know the least`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, hook your arm under you leg and drink 2 sips`,
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
                challenge: `${GetRandomName(names)}, Say something you've never done. All players who have done it drink ${GetRandonInt(2, 3)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out 1 sip for every other player`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)} and ${GetRandomName(names)}, play rock paper scissors. The loser drinks ${GetRandonInt(3, 6)} sips`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)}, make a jungle juice with whatever beverages there are in the room. ${GetRandomName(names)} has to drink them.`,
                punishment: `Drink ${GetRandonInt(3, 6)} sips if you refuse to drink them`
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)}, snort a line of pepper or salt`,
                punishment: `Drink ${GetRandonInt(2, 4)} if you refuse`
            },
            {
                type: types.NORMAL,
                challenge: `Drink a sip for every line you snorted today`,
            },
            {
                type: types.NORMAL,
                challenge: `Everyone touch the floor. The last person to touch the floor has to drink a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `Everyone point up. The last person to point up has to drink a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `All girls drink a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `All boys drink a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink ${GetRandonInt(1, 4)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out ${GetRandonInt(1, 4)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `The tallest person has to drink 2 sips`,
            },
            {
                type: types.NORMAL,
                challenge: `The shortest person has to drink 2 sips`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)}, impersonate a famous person. If someone guesses who it is you can give out ${GetRandonInt(2, 3)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `Everyone wearing black takes a sip.`
            },
            {
                type: types.NORMAL,
                challenge: `Everyone with their socks off, drink a sip`
            },
            {
                type: types.NORMAL,
                challenge: `Everyone wearing skirts takes a sip.`
            },
            {
                type: types.NORMAL,
                challenge: `The person hosting the function can give out ${GetRandonInt(2, 4)} sips`
            },
            {
                type: types.NORMAL,
                challenge: `The person with the longest hair has to drink a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, share a fun fact about yourself. Anyone who didn't know this fact drinks a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, name a movie. Everyone who hasn't seen it drinks a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, share a guilty pleasure. Anyone who shares that pleasure takes a sip`
            },
            {
                type: types.NORMAL,
                challenge: `Everyone with a birthday in the current month drinks a sip`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(['Aquarius', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Virgo', 'Libra', 'Scorpio', 'Capricorn', 'Pisces', 'Leo', 'Sagittarius'])[0]}'s has drink ${GetRandonInt(2, 4)} sips`
            },
            {
                type: types.NORMAL,
                challenge: `The person with the most unread notifications has to drink a sip`
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)}, chug you drink. If you can chug it in 5 seconds you can give out a shot`,
                punishment: `If you refuse, drink ${GetRandonInt(5, 8)} sips`
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)}, show the last image in your camera roll`,
                punishment: `drink ${GetRandonInt(1, 4)} sips if you refuse`
            },
            {
                type: types.GAME,
                challenge: `Things with buttons. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName(names)} starts`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)}, give your phone, unlocked, to ${GetRandomName(names)} for 1 minute`,
                punishment: `drink a shot if you refuse`
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)}, drink ${GetRandonInt(4, 8)} sips. The person to your ${GetRandomDirection()} has to drink 1 less and so one until you reach 0`
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(2, 5)} sips if you've ever bought cryptocurrency. +1 if you own any now`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, tell a joke or take 2 sips`
            },
            {
                type: types.GAME,
                challenge: `Would you rather have the car of your dreams or a helicopter? Everyone vote at once, losing group drinks 3 sips`
            },
            {
                type: types.GAME,
                challenge: `Places to hide a dead body. If you repeat or can't think of one, take ${GetRandonInt(1, 3)} sips. ${GetRandomName(names)} starts`
            },
            {
                type: types.NORMAL,
                challenge: 'The last player that smoked weed has to drink a sip'
            },
            {
                type: types.NORMAL,
                challenge: 'Players who play guitar drink a sip'
            },
            {
                type: types.NORMAL,
                challenge: 'Players who play bass drink a sip'
            },
            {
                type: types.NORMAL,
                challenge: 'Players who play piano drink a sip'
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(1, 2)} sips if you've ever been black-out drunk`
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(1, 2)} sips if you've ever thrown up before arriving to a party`
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(1, 2)} sips if you're going to a rave this month`
            },
            {
                type: types.NORMAL,
                challenge: `The person who arrived last to the party has to drink a shot`
            },
            {
                type: types.GAME,
                challenge: `Pokemons. If you repeat or can't think of one, take ${GetRandonInt(1, 3)} sips. ${GetRandomName(names)} starts`
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(1, 2)} sips if you're Alex' incredibly hot girlfriend`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink a sip for every person thats older than you`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink a sip for every person thats younger than you`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out a sip for every person thats older than you`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out a sip for every person thats younger than you`
            },
            {
                type: types.NORMAL,
                challenge: `All players who are going out tonight, drink a shot`
            },
            {
                type: types.GAME,
                challenge: `Synonyms for sex. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
            },
            {
                type: types.NORMAL,
                challenge: `Any player shorter than ${GetRandomName(names)}, drink a sip`
            },
            {
                type: types.NORMAL,
                challenge: `Any player taller than ${GetRandomName(names)}, drink a sip`
            },
            {
                type: types.GAME,
                challenge: `Dating apps. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
            },
            {
                type: types.NORMAL,
                challenge: `Players with an empty glass, refill it and drink ${GetRandonInt(1, 2)} sips`
            },
            {
                type: types.NORMAL,
                challenge: `Girls, drink as many sips as there are handsome guys in the room`,
            },
            {
                type: types.NORMAL,
                challenge: `Girls, drink as many sips as there are attractive girls in the room`,
            },
            {
                type: types.NORMAL,
                challenge: `Guys, drink as many sips as there are attractive girls in the room`,
            },
            {
                type: types.NORMAL,
                challenge: `Guys, drink as many sips as there are handsome guys in the room`,
            },
            {
                type: types.NORMAL,
                challenge: `The first player out of ${GetRandomName(names)} and ${GetRandomName(names)} to touch the fridge, give out ${GetRandonInt(2, 4)} sips`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, give out ${GetRandonInt(2, 4)} sips for every player who is more attractive than you. If you think there are none, they're all yours.`,
            },
            {
                type: types.GAME,
                challenge: `Russian roulette! Make 5 shots of water and 1 shot of vodka and shuffle. ${GetRandomName(names)} has to drink the first one. Go clockwise`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink a sip if you watch TLC just to laugh at people`,
            },
            {
                type: types.NORMAL,
                challenge: `No more cigarettes for the rest of the game. Drink a shot if you want to smoke`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink a sip if you haven't been to the dentist this year`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink ${GetRandonInt(1, 3)} sip if you've ever driven faster than 150 km/h`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink a sip for every empty glass on the tables`,
            },
            {
                type: types.GAME,
                challenge: `Busdriver! ${GetRandomName(names)} has to get on the bus and can get out when they finish the game`,
            },
            {
                type: types.GAME,
                challenge: `Two truths and a lie! ${GetRandomName(names)} has to say 2 truths and a lie. Everyone takes turns guessing the lie. When everyone has taken a guess they can reveal which one was the lie. People who lose have to drink ${GetRandonInt(2, 4)} sips`,
            },
            {
                type: types.GAME,
                challenge: `Thumb wars! ${GetRandomName(names)} and ${GetRandomName(names)} have to do a thumb wars. The loser has to drink ${GetRandonInt(2, 4)} sips. Players can bet on the winner. If they lose the bet they have to drink a sip. If they win, they can give out a sip`,
            },
            {
                type: types.GAME,
                challenge: `Arm wrestle! ${GetRandomName(names)} and ${GetRandomName(names)} have to arm wrestle. The loser has to drink ${GetRandonInt(2, 4)} sips. Players can bet on the winner. If they lose the bet they have to drink a sip. If they win, they can give out a sip`,
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink a sip for every empty glass on the tables`,
            },
            {
                type: types.JOKER,
                challenge: `Raise your pinky finger every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.JOKER,
                challenge: `Say amen every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.JOKER,
                challenge: `Say a slur every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.JOKER,
                challenge: `Touch your nose every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.JOKER,
                challenge: `High five the person to your left every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.JOKER,
                challenge: `Moan every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.JOKER,
                challenge: `look in the eyes of the person across from you every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.JOKER,
                challenge: `Raise your glass and say 'Shalom' every time you drink until the end of the game or until the next joker card`,
            },
            {
                type: types.GAME,
                challenge: `Rhyme! ${GetRandomName(names)} has to pick a rhyme and everyone has to take turns saying a work that rhymes with it. If you repeat or can't think of one, drink ${GetRandonInt(2, 3)} sips`,
            },
            {
                type: types.DARE,
                challenge: `${GetRandomName(names)} has to give their phone to ${GetRandomName(names)}. They can compose a text to whoever they want and have to give it back to the owner without hitting send`,
                punishment: `Drink ${GetRandonInt(4, 8)} sips if you don't hit send`
            },
            {
                type: types.JOKER,
                challenge: `${GetRandomName(names)}, pick a mate! Every time you drink, they have to drink too until the end of the game or until the next joker card`,
            },
            {
                type: types.NORMAL,
                challenge: `Drink a sip if you've every kissed a person of the same sex on the mouth`
            },
            {
                type: types.NORMAL,
                challenge: `People with an ${GetRandomName(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])} in their name, drink a shot`
            },
            {
                type: types.NORMAL,
                challenge: `${GetRandomName(names)}, drink a sip if you've ever been to a party with ${GetRandomName(names)}`
            },
            {
                type: types.GAME,
                challenge: `Drinking games. If you repeat or can't think of one, take ${GetRandonInt(1, 2)} sips. ${GetRandomName(names)} starts`,
            },
            {
                type: types.GAME,
                challenge: `${GetRandomName(names)}, impersonate another player. The first person to guess correctly has to give out 2 sips`,
            },



        ]
    }
    return deck;
}

