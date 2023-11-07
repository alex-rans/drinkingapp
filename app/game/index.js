import { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from "../../style/styles";
import Card from "../../components/common/card/Card";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LewdDeck } from "../../assets/decks/lewdDeck";
import { NormalDeck } from "../../assets/decks/normalDeck";
import { TestDeck } from "../../assets/decks/testDeck";

const Game = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [deck, setDeck] = useState();
    const [players, setPlayers] = useState();

    //this is fucking stupid I hate react and its async bullshit 
    //holy fuck why cant you just run code sequentially im not asking for terrabytes of data here
    //this shit can run synchronously now I have to deal with data not fucking loading in time
    //or some other bullshit going on.
    useEffect(() => {
        const getdeck = AsyncStorage.getItem('deck').then((value) => {
            setDeck(value)
        });
        let jsonvalue = AsyncStorage.getItem('players').then((value) => {
            setPlayers(JSON.parse(value))
            setIsLoading(false)
        });
        
    }, [])
    switch (deck) {
        case 'Normal':
            Deck = NormalDeck(players)['cards']
            break;
        case 'Lewd':
            Deck = LewdDeck(players)['cards']
            break;
        case 'Test':
            Deck = TestDeck(players)['cards']
            break;
    }

    // async function getFuckingDeck() {
    //     Deck = await NormalDeck(players)['cards']
    //     console.log(Deck)
    //     setIsLoading(false)
    // }

    // getFuckingDeck()

    if (isLoading) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false, orientation: 'landscape' }} />
            <Card selecteddeck={Deck}></Card>
        </SafeAreaView>
    )
}

export default Game;