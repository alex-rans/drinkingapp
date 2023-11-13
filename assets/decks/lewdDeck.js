import { GetRandonInt, GetRandomDirection, GetRandomName, GetTypes } from '../deckFunctions'

export function LewdDeck(names = ['cunt', 'fag']) {
  const types = GetTypes();

  const deck = {
    name: "Lewd",
    cards: [
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)} has to get slapped by the person to their ${GetRandomDirection()}`,
        punishment: `Take ${GetRandonInt(1, 2)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)} has to get slapped by ${GetRandomName(names)}`,
        punishment: `Take ${GetRandonInt(1, 2)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)} has to kiss the person to their ${GetRandomDirection()} on the mouth`,
        punishment: `Take ${GetRandonInt(1, 4)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, french kiss the person you like the most`,
        punishment: `Take ${GetRandonInt(2, 4)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)} has to kiss the first person who says your name`,
        punishment: `Take a shot`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, Slap the person who deserves it. The person who deserved it has to drink ${GetRandonInt(2, 3)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)} has to remove one piece of clothing`,
        punishment: `Take ${GetRandonInt(3, 6)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, take a sip for every person you've slept with in this room`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, make your orgasm face`,
        punishment: `Drink ${GetRandonInt(1, 2)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `Players who have faked an orgasm drink ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who've had a threeway drink ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.GAME,
        challenge: `All players have to point at the most attractive person. The most attractive person can give out ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who have made a sex tape drink ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who have slept with someone who is 10 years older than them, drink ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, take a sip for every person you've hooked up with. If you can't remember how many drink 4 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)} drink as many sips as you want. ${GetRandomName(names)} has to drink double`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)} give out 2 sips to the sexiest player`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you're not wearing underwear right now`,
      },
      {
        type: types.GAME,
        challenge: `Common places for sexual fantasies. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, choose a player and give them a hickey, wherever they want`,
        punishment: `Drink ${GetRandonInt(2, 4)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} if you own any sex toys`,
      },
      {
        type: types.GAME,
        challenge: `Take turns showing your tattoos and piercings. Players who don't have any drink 2 sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you've had sex more than 4 times in one day, give out 3 sips. If not, drink them`,
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)}, blindfold yourself. 2 players then have to kiss you wherever they want. If you guess who either of them is, give out ${GetRandonInt(2, 5)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, choose a player and pinch their ass`,
        punishment: `Drink ${GetRandonInt(3, 4)} if either of you refuse.`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)} any player who doesn't follow you on instagram has to drink a sip.`,
      },
      {
        type: types.NORMAL,
        challenge: `If you'd be happy to kiss the player to your ${GetRandomDirection()}, raise your hand. Everyone else drink 2 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you've ever used a sex toy`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, stare into the eyes of someone you'd happily sleep with tonight. They have to drink ${GetRandonInt(2, 3)} sips.`,
        punishment: `Drink ${GetRandonInt(3, 4)} sips if you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `Drink a sip if you didn't pay for anythign tonight. Cheapskate.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've had both gay and straight sexual experiences`,
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
        type: types.DARE,
        challenge: `${GetRandomName(names)}, unclip another girl's bra in under 5 second`,
        punishment: `Drink ${GetRandonInt(3, 4)} sips if you fail`
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)}, tell us the name and age of each player. The person who's name or age you don't know can give out ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, show us the last 5 photos on your phone`,
        punishment: `Drink ${GetRandonInt(3, 5)} sips if you refuse`
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
        type: types.GAME,
        challenge: `What was your longest dry spell? The player with the longest one has to drink ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you've ever given a massage that turned into a happy ending`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you've ever received a massage that turned into a happy ending`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who've already kissed each other, kiss again or drink ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, kiss ${GetRandomName(names)}'s feet`,
        punishment: `If either refuse drink ${GetRandonInt(2, 4)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've given a BJ this week`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you've given a BJ this month`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you received a BJ this week`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you received a BJ this month`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, choose a player to lick one of your body parts`,
        punishment: `If either refuse drink 2 sips`
      },
      {
        type: types.NORMAL,
        challenge: `Girls, remove an item of clothing or drink 2 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Guys, remove an item of clothing or drink 2 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, drink a sip without using your hands.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you,ve ever been skinny dipping`,
      },
      {
        type: types.GAME,
        challenge: `Spin the bottle. Take turns to spin the bottle and kiss the player it lands on, Anyone who refuses has to take 2 sips. ${GetRandomName(names)}, you start`,
      },
      {
        type: types.GAME,
        challenge: `Everyone vote on who has the worst sex life. The unfortunate person has to drink ${GetRandonInt(2, 4)} sips`,
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
        challenge: `${GetRandomName(names)} has to guess one of ${GetRandomName(names)} kinks. If you guess wrong you drink 2 sips. If you guess right you can give out 3 sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `Whoever has the biggest hands out of ${GetRandomName(names)} and ${GetRandomName(names)}, drink a sip.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, give 2 sips to a player who's shorter than you. If there are none, you drink them.`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, let ${GetRandomName(names)} suck your fingers`,
        punishment: `If either of you refuse drink ${GetRandonInt(2, 4)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, choose someone to take a sip from ${GetRandomName(names)}'s glass`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, drink a sip from ${GetRandomName(names)}'s glass`,
      },
      {
        type: types.NORMAL,
        challenge: `Give out 2 sips if you've ever masturbated at work.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} if you've ever masturbated just before hooking up so that you'll last longer`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, show us a topless picture of yourself`,
        punishment: `Drink ${GetRandonInt(2, 3)} sips if you refuse`
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
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you kiss ${GetRandomName(names)} on the cheeck, everyone has to drink 2 sips`,
      },
      {
        type: types.GAME,
        challenge: `What was your favorite sex position? Players with the same answer have to drink ${GetRandonInt(2, 3)} sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} if you want to have sex right now`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, kiss ${GetRandomName(names)} on the nose`,
        punishment: `Drink ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, kiss ${GetRandomName(names)} on the cheek`,
        punishment: `Drink ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, kiss ${GetRandomName(names)} on the lips`,
        punishment: `Drink ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `Players who've had an orgasm in under 3 minutes, drink ${GetRandonInt(2, 4)} sips`,
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
        challenge: `${GetRandomName(names)} sniff ${GetRandomName(names)} armpit or drink ${GetRandonInt(2, 3)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, give out 4 sips to the group, or ${GetRandomName(names)} has to drink a shot`,
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
        challenge: `Everyone, take as many sips as there are fuckable people in the room`,
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
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've ever been insulted while having sex`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever had sex while watching a cartoon`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, go somewhere private, take off your underwear and come back`,
        punishment: `Drink ${GetRandonInt(4, 6)} sips if you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, pick a letter. All players who've slept with someone whose name starts with that letter, drink ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Ketamine snorters drink 1 sip`,
      },
      {
        type: types.GAME,
        challenge: `Everyone vote on which player gets laid the least. The player with the most votes has to drink ${GetRandonInt(3, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, give out 2 sips to the most attractive player`,
      },
      {
        type: types.NORMAL,
        challenge: `If you've ever slept with someone and forgotten/never knew their name, drink ${GetRandonInt(2, 3)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if having sex with ${GetRandomName(names)} wouldn't bother you, give out 3 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who study psychology drink a sip.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you've ever beaten somebody up, give out 2 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `The player who lost their virginity the youngest has to drink ${GetRandonInt(2, 5)} sips`,
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
        challenge: `If you've had more long-term relationships than casual hook-ups, give out ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you've ever played strip poker`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, tell your secret to good blowjob`,
        punishment: `Drink a sip`
      },
      {
        type: types.NORMAL,
        challenge: `People who stayed in bed past 10AM today, drink 2 sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you stayed in bed past 10AM today, drink 2 sips. If not, you can give them out`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you've ever drank alcohol right after waking up, drink 2 sips. If not, you can give them out`,
      },
      {
        type: types.NORMAL,
        challenge: `Take ${GetRandonInt(2, 4)} sips if you've ever given or received a golden shower`,
      },
      {
        type: types.NORMAL,
        challenge: `Weed smokers drink 1 sip`,
      },
      {
        type: types.GAME,
        challenge: `Things you find in a basement. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
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
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you like being scratched during sex`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you like being bitten during sex`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you like being watched having sex`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you like watching people have sex`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've had breakup sex`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} sips if you've ever been to an orgy`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} sips if you've ever cheated`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've ever had sex in public`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've given a blowjob in a public toilet`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've ever received a blowjob in a public toilet`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've ever been tied up during sex`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, touch someone's boobs`,
        punishment: `Take ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, have someone touch your boobs`,
        punishment: `Take ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `If you've ever send nudes to someone, drink ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)} has to give one player a shot and the rest of the players a little kiss.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink a sip if you like dirty talk`,
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
        type: types.DARE,
        challenge: `${GetRandomName(names)}, pass a snack from your mouth to another player's mouth`,
        punishment: `Take ${GetRandonInt(2, 4)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you're older than ${GetRandomName(names)} drink a sip`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you're younger than ${GetRandomName(names)} drink a sip`,
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
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever been deepthroat`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever deepthroated someone`,
      },
      {
        type: types.GAME,
        challenge: `Everyone vote on who is the best throatgoat. The player with the most votes can give out ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you've ever sexted someone`,
      },
      {
        type: types.GAME,
        challenge: `Everyone vote on who you think has had the most sexual partner. The player with the most votes has to drink ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.GAME,
        challenge: `Brands of vodka. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
      },
      {
        type: types.NORMAL,
        challenge: `If you think ${GetRandomName(names)} would be a good fuck, drink 2 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `If you've ever had a purely fuck buddy relationship with a friend, drink ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.GAME,
        challenge: `Things you can put up your ass. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, hook your arm under you leg and drink 2 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `The first person to post a selfie on social media can give out a shot. The picture must stay up until tomorrow`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, either you give one sip to whoever you want, or ${GetRandomName(names)} has to drink 2 sips`,
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
        type: types.DARE,
        challenge: `${GetRandomName(names)}, choose a player and ask them a question. They have to answer honestly`,
        punishment: `If they refuse to answer they have to drink a shot`
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you have to go to work tomorrow (Then cry is silence)`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you've ever slept with a classmate`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you've ever slept with a colleague`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you've ever slept with your friend`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever slept with your best friend`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips you've ever had a sore ass after anal`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, if you've ever fantasized about ${GetRandomName(names)}, give out ${GetRandonInt(1, 3)} sips. If not, drink them.`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who are bald have to drink a shot`,
      },
      {
        type: types.NORMAL,
        challenge: `If you've ever hooked up thanks to a dating up, drink ${GetRandonInt(2, 4)} sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who have Tinder on their phone, drink ${GetRandonInt(2, 4)} sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who have multiple dating apps on their phone, drink ${GetRandonInt(2, 5)} sips.`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, choose a player to drink a bodyshot from`,
        punishment: `If either of you refuse, drink a shot each`
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)}, point out the 3 hottest people in the room. The hottest has to drink 1 sip. The second hottest 2 sips and the third hottest 3 sips.`,
      },
      {
        type: types.GAME,
        challenge: `Objects used for bondage. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
      },
      {
        type: types.NORMAL,
        challenge: `Tops drink a sip`,
      },
      {
        type: types.NORMAL,
        challenge: `Bottoms drink a sip`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, drink a sip for every time you've been dumped`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, drink a sip for every person you've broken up with`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you like chicken nuggets or if you want to be dominated by a big titty goth mommy`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who are currently drink Cara, drink ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who would sleep with ${GetRandomName(names)}, drink ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Players currently have porn tabs open in their phone, drink ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, show us the 5 most recent images on your phone`,
        punishment: `Drink ${GetRandonInt(3, 5)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, show us your browser history`,
        punishment: `Drink ${GetRandonInt(1, 4)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, give the person to your ${GetRandomDirection()} a lap dance`,
        punishment: `Drink ${GetRandonInt(1, 4)} sips if you refuse`
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)} and ${GetRandomName(names)}, tell us your best pick up line. All other players vote on who is the best one. The winner can give out ${GetRandonInt(2, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you've ever had sex on the first date (hookups don't count)`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you ever took someone home after a party`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you ever send a naughty text to the wrong person`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you are currently obsessing over someone`,
      },
      {
        type: types.NORMAL,
        challenge: `People in a situanship drink ${GetRandonInt(2, 3)} sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you've ever did dirty things in a movie theatre`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} sips if you've ever been caught in the act`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever caught someone in the act`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever caught someone in the act`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} sips if you've every fucked your (step) sister/brother`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, swap an item of clother with ${GetRandomName(names)}`,
        punishment: `Drink ${GetRandonInt(1, 4)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `The player who most recently watched porn can give out ${GetRandonInt(1, 4)} sips`,
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
        type: types.NORMAL,
        challenge: `Drink a sip for every line you snorted today`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, text the last person you texted that you're pregnant`,
        punishment: `Drink ${GetRandonInt(1, 4)} sips if you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, show the group the last porn you watched`,
        punishment: `Drink ${GetRandonInt(2, 5)} sips if you refuse`
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)}, fuck, marry, kill 3 people in the group. The married person can give out 1 sip and the dead person has to drink 1 sip`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, tell the group about the hottest sex you've had`,
        punishment: `Drink ${GetRandonInt(3, 6)} sips if you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, chug you drink. If you can chug it in 5 seconds you can give out a shot`,
        punishment: `If you refuse, drink ${GetRandonInt(5, 8)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, share a guilty pleasure. Anyone who shares that pleasure takes a sip`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, share a fun fact about yourself. Anyone who didn't know this fact drinks a sip`
      },
      {
        type: types.NORMAL,
        challenge: `The person hosting the function can give out ${GetRandonInt(2, 4)} sips`
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
        type: types.DARE,
        challenge: `${GetRandomName(names)}, give your phone, unlocked, to ${GetRandomName(names)} for 1 minute`,
        punishment: `drink a shot if you refuse`
      },
      {
        type: types.GAME,
        challenge: `Synonyms for sex. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
      },
      {
        type: types.NORMAL,
        challenge: `All players who are going out tonight, drink a shot`
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if your Alex' incredibly hot girlfriend`
      },
      {
        type: types.NORMAL,
        challenge: `The person who arrived last to the party has to drink a shot`
      },
      {
        type: types.NORMAL,
        challenge: 'The last player that smoked weed has to drink a sip'
      },
      {
        type: types.GAME,
        challenge: `Places to hide a dead body. If you repeat or can't think of one, take ${GetRandonInt(1, 3)} sips. ${GetRandomName(names)} starts`
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(1, 2)} sips if you've ever thrown up before arriving to a party`
      },
      {
        type: types.NORMAL,
        challenge: `Drink a sip if you've ever had unprotected sex with a stranger`
      },
      {
        type: types.GAME,
        challenge: `Dating apps. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)}, you start`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)}, give access to your snap to ${GetRandomName(names)} for 1 minute`,
        punishment: `drink a shot if you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, give out ${GetRandonInt(2, 4)} sips for every player who is more attractive than you. If you think there are none, they're all yours.`,
      },
      {
        type: types.GAME,
        challenge: `Arm wrestle! ${GetRandomName(names)} and ${GetRandomName(names)} have to arm wrestle. The loser has to drink ${GetRandonInt(2, 4)} sips. Players can bet on the winner. If they lose the bet they have to drink a sip. If they win, they can give out a sip`,
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
        type: types.JOKER,
        challenge: `${GetRandomName(names)}, pick a mate! Every time you drink, they have to drink too until the end of the game or until the next joker card`,
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
        type: types.DARE,
        challenge: `${GetRandomName(names)} lick ${GetRandomName(names)}'s cheek.`,
        punishment: `Drink ${GetRandonInt(2, 4)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `Drink a sip if you would let someone fuck you for 1000 euro's`
      },
      {
        type: types.JOKER,
        challenge: `${GetRandomName(names)}, start massaging ${GetRandomName(names)} until the end of the game or until the next joker card. Drink a sip for every card you refuse.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink a sip if you've every kissed a person of the same sex on the mouth`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)} show the group a nude you've got on your phone`,
        punishment: `Drink ${GetRandonInt(2, 4)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `People with an ${GetRandomName(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])} in their name, drink a shot`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)}, drink a sip if you've ever been to a party with ${GetRandomName(names)}`
      },
    ]
  }
  return deck;
}