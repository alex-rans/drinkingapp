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
function GetRandomName(names) {
    const shuffled = names.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, 2);
        return selected
}

function GetTypes() {
    return types = {
        DARE: 'Dare',
        GAME: 'Game',
        NORMAL: 'Normal'
    }
}

export {GetRandonInt, GetRandomDirection, GetRandomName, GetTypes}