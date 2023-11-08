import { GetRandonInt, GetRandomDirection, GetRandomName, GetTypes } from '../deckFunctions'

export function LewdDeck(names = ['cunt', 'fag']) {
  // function GetRandonInt(min, max) {
  //   const number = Math.floor(Math.random() * (max - min + 1) + min);
  //   return number;
  // }

  // function GetRandomDirection() {
  //   const randomBoolean = () => Math.random() >= 0.5;
  //   if (randomBoolean()) {
  //     return 'left'
  //   }
  //   else return 'right'
  // }
  // function GetRandomName(names) {
  //   const shuffled = names.sort(() => 0.5 - Math.random());
  //   let selected = shuffled.slice(0, 2);
  //   return selected
  // }
  // const types = {
  //   DARE: 'Dare',
  //   GAME: 'Game',
  //   NORMAL: 'Normal'
  // }
  const types = GetTypes()

  // names = JSON.parse(names)
  const deck = {
    name: "Lewd",
    cards: [
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]} has to get slapped by the person to their ${GetRandomDirection()}`,
        punishment: `Take ${GetRandonInt(1, 2)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]} has to get slapped by ${GetRandomName(names)[2]}`,
        punishment: `Take ${GetRandonInt(1, 2)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]} has to kiss the person to their ${GetRandomDirection()} on the mouth`,
        punishment: `Take ${GetRandonInt(1, 4)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, french kiss the person you like the most`,
        punishment: `Take ${GetRandonInt(2, 4)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]} has to kiss the first person who says your name`,
        punishment: `Take a shot`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, Slap the person who deserves it. The person who deserved it has to drink ${GetRandonInt(2, 3)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]} has to remove one piece of clothing`,
        punishment: `Take ${GetRandonInt(3, 6)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, take a sip for every person you've slept with in this room`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, make your orgasm face`,
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
        challenge: `${GetRandomName(names)[0]}, take a sip for every person you've hooked up with. If you can't remember how many drink 4 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]} drink as many sips as you want. ${GetRandomName(names)[0]} has to drink double`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]} give out 2 sips to the sexiest player`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you're not wearing underwear right now`,
      },
      {
        type: types.GAME,
        challenge: `Common places for sexual fantasies. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)[0]}, you start`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, choose a player and give them a hickey, wherever they want`,
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
        challenge: `If you've had sex more than 4 times in one day, give out 3 sips. If not, drink them`,
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)[0]}, blindfold yourself. 2 players then have to kiss you wherever they want. If you guess who either of them is, give out ${GetRandonInt(2, 5)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, choose a player and pinch their ass`,
        punishment: `Drink ${GetRandonInt(3, 4)} if either of you refuse.`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]} any player who doesn't follow you on instagram has to drink a sip.`,
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
        challenge: `${GetRandomName(names)[0]}, stare into the eyes of someone you'd happily sleep with tonight. They have to drink ${GetRandonInt(2, 3)} sips.`,
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
        challenge: `${GetRandomName(names)[0]}, give out as many sips as you have siblings`,
      },
      {
        type: types.NORMAL,
        challenge: `Players with brown eyes, drink a sip`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, unclip another girl's bra in under 5 second`,
        punishment: `Drink ${GetRandonInt(3, 4)} sips if you fail`
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)[0]}, tell us the name and age of each player. The person who's name or age you don't know can give out ${GetRandonInt(1, 2)} sips`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, show us the last 5 photos on your phone`,
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
        challenge: `${GetRandomName(names)[0]}, kiss ${GetRandomName(names)[1]}'s feet`,
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
        challenge: `${GetRandomName(names)[0]}, choose a player to lick one of your body parts`,
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
        challenge: `${GetRandomName(names)[0]}, drink a sip without using your hands.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink 2 sips if you,ve ever been skinny dipping`,
      },
      {
        type: types.GAME,
        challenge: `Spin the bottle. Take turns to spin the bottle and kiss the player it lands on, Anyone who refuses has to take 2 sips. ${GetRandomName(names)[0]}, you start`,
      },
      {
        type: types.NORMAL,
        challenge: `The person who last filled their glass has to drink a sip.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]} and ${GetRandomName(names)[2]}, cross arms and take a sip together.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, give out one sip for every good quality that ${GetRandomName(names)[2]} has`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]} has to guess one of ${GetRandomName(names)[1]} kinks. If you guess wrong you drink 2 sips. If you guess right you can give out 3 sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `Whoever has the biggest hands out of ${GetRandomName(names)[0]} and ${GetRandomName(names)[0]}, drink a sip.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, give 2 sips to a player who's shorter than you. If there are none, you drink them.`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, let ${GetRandomName(names)[1]} suck your fingers`,
        punishment: `If either of you refuse drink ${GetRandonInt(2, 4)} sips`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, choose someone to take a sip from ${GetRandomName(names)[0]}'s glass`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, drink a sip from ${GetRandomName(names)[0]}'s glass`,
      },
      {
        type: types.NORMAL,
        challenge: `Give out 2 sips if you'eve ever masturbated at work.`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 4)} if you've ever masturbated just before hooking up so that you'll last longer`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, show us a topless picture of yourself`,
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
        challenge: `${GetRandomName(names)[0]}, if you kiss ${GetRandomName(names)[1]} on the cheeck, everyone has to drink 2 sips`,
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
        challenge: `${GetRandomName(names)[0]}, kiss ${GetRandomName(names)[1]} on the nose`,
        punishment: `Drink ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, kiss ${GetRandomName(names)[1]} on the cheek`,
        punishment: `Drink ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, kiss ${GetRandomName(names)[1]} on the lips`,
        punishment: `Drink ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `Players who've had an orgasm in under 3 minutes, drink ${GetRandonInt(2, 4)} sips`,
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
        challenge: `${GetRandomName(names)[0]} sniff ${GetRandomName(names)[1]} armpit or drink ${GetRandonInt(2, 3)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, give out 4 sips to the group, or ${GetRandomName(names)[1]} has to drink a shot`,
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
        challenge: `Everyone, take as many sips as there are fuckable people in the room`,
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
        challenge: `Drink ${GetRandonInt(1, 3)} sips if you've ever been insulted while having sex`,
      },
      {
        type: types.NORMAL,
        challenge: `Drink ${GetRandonInt(2, 3)} sips if you've ever had sex while watching a cartoon`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, go somewhere private, take off your underwear and come back`,
        punishment: `Drink ${GetRandonInt(4, 6)} sips if you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, pick a letter. All players who've slept with someone whose name starts with that letter, drink ${GetRandonInt(2, 4)} sips`,
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
        type: types.GAME,
        challenge: `Everyone vote on which player gets laid the least. The player with the most votes can give out ${GetRandonInt(3, 4)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, give out 2 sips to the most attractive player`,
      },
      {
        type: types.NORMAL,
        challenge: `If you'eve ever slept with someone and forgotten/never knew their name, drink ${GetRandonInt(2, 3)} sips`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, if having sex with ${GetRandomName(names)[1]} wouldn't bother you, give out 3 sips`,
      },
      {
        type: types.NORMAL,
        challenge: `Players who study psychology drink a sip.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, if you'eve ever beaten somebody up, give out 2 sips`,
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
        challenge: `Waterfall! You have to start drinking when the player on your right drinks and can only stop when they stop. ${GetRandomName(names)[0]} starts`,
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
        challenge: `${GetRandomName(names)[0]}, tell your secret to good blowjob`,
        punishment: `Drink a sip`
      },
      {
        type: types.NORMAL,
        challenge: `People who stayed in bed past 10AM today, drink 2 sips.`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, if you stayed in bed past 10AM today, drink 2 sips. If not, you can give them out`,
      },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName(names)[0]}, if you've ever drank alcohol right after waking up, drink 2 sips. If not, you can give them out`,
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
        challenge: `Things you find in a basement. If you repeat or can't think of one, drink 2 sips. ${GetRandomName(names)[0]}, you start`,
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
        challenge: `${GetRandomName(names)[0]}, touch someone's boobs`,
        punishment: `Take ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName(names)[0]}, have someone touch your boobs`,
        punishment: `Take ${GetRandonInt(1, 3)} sips if either of you refuse`
      },
      {
        type: types.NORMAL,
        challenge: `If you've ever send nudes to someone, drink ${GetRandonInt(2, 4)}`,
      },
      {
        type: types.GAME,
        challenge: `${GetRandomName(names)[0]} has to give one player a shot and the rest of the players a little kiss.`,
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
        type: types.GAME,
        challenge: `${GetRandomName(names)[0]}, pass a snack from your mouth to another player's mouth`,
        punishment: `Take ${GetRandonInt(2, 4)} sips if either of you refuse`
      },
    ]
  }
  return deck;
}