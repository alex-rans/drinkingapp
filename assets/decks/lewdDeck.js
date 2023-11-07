export function LewdDeck(names) {
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
    if(randomname !== lastname) {
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
    name: "Lewd",
    cards: [
      {
        type: types.DARE,
        challenge: `${GetRandomName()} has to get slapped by the person to their ${GetRandomDirection()}`,
        punishment: `Take ${GetRandonInt(1, 2)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName()} has to get slapped by ${GetRandomName()}`,
        punishment: `Take ${GetRandonInt(1, 2)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName()} has to kiss the person to their ${GetRandomDirection()} on the mouth`,
        punishment: `Take ${GetRandonInt(1, 4)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName()} has to kiss the ${GetRandomDirection()} on the mouth`,
        punishment: `Take ${GetRandonInt(1, 4)} sips`
      },
      {
        challenge: `${GetRandomName()}, french kiss the person you like the most`,
        punishment: `Take ${GetRandonInt(2, 4)} sips`
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName()} has to kiss the first person who says your name`,
        punishment: `Take a shot`
      },
      // {
      //   type: types.NORMAL,
      //   challenge: `${GetRandomName()} has to lick the neck of the person to their ${GetRandomDirection()}`,
      //   punishment: `Take ${GetRandonInt(2, 4)} sips`
      // },
      // {
      //   type: types.NORMAL,
      //   challenge: `${GetRandomName()} has to lick the neck of ${GetRandomName()}`,
      //   punishment: `Take ${GetRandonInt(2, 4)} sips`
      // },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName()}, Slap the person who deserves it. The person who deserved it has to drink ${GetRandonInt(2, 3)} sips`,
      },
      // {
      //   type: types.NORMAL,
      //   challenge: `${GetRandomName()} has to remove one piece of clothing`,
      //   punishment: `Take ${GetRandonInt(3, 6)} sips`
      // },
      // {
      //   type: types.GAME,
      //   challenge: `${GetRandomName()} has to rank all the players from most attractive to least attractive`,
      //   punishment: `The least aTake ${GetRandonInt(3, 6)} sips`
      // },
      {
        type: types.NORMAL,
        challenge: `${GetRandomName()}, take a sip for every person you've slept with in this room`,
      },
      {
        type: types.DARE,
        challenge: `${GetRandomName()}, make your orgasm face`,
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
        type: types.NORMAL,
        challenge: `All players point at the most attractive person. The most attractive person can give out ${GetRandonInt(1, 3)} sips`,
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
        challenge: `${GetRandomName()}, take a sip for every person you've hooked up with. If you can't remember how many drink 6 sips`,
      },
      
    ]
  }

  return deck;
}