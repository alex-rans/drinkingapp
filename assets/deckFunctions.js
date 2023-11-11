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
function GetRandomName(names = ['player 01', 'player 02']) {
    const shuffled = names.sort(() => 0.5 - Math.random());
    if(shuffled[0] == lastname) {
        GetRandomName(names)
    }
    lastname = shuffled[0]
    return shuffled[0]
}

function GetTypes() {
    return types = {
        DARE: 'Dare',
        GAME: 'Game',
        NORMAL: 'Normal'
    }
}

export { GetRandonInt, GetRandomDirection, GetRandomName, GetTypes }