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
    let gameDeck = []
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

        // switch (deck) {
        //     case 'Normal':
        //         Deck = NormalDeck(players)['cards']
        //         Pick50Cards(Deck);
        //         break;
        //     case 'Lewd':
        //         Deck = LewdDeck(players)['cards']
        //         Pick50Cards(Deck);
        //         break;
        //     case 'Test':
        //         gameDeck = TestDeck(players)['cards']
        //         // Pick50Cards(Deck);
        //         break;
        // }
        // setIsLoading(false)
    }, [])

    function Pick50Cards(deck) {
        console.log(Deck.length)
        for (let count = 0; count < 50; count++) {
            const randomCard = deck[Math.floor(Math.random() * deck.length)]
            gameDeck.push(randomCard)
            deck.splice(Deck.indexOf(randomCard), 1);
        }
    }

    switch (deck) {
        case 'Normal':
            Deck = NormalDeck(players)['cards']
            Pick50Cards(Deck);
            break;
        case 'Lewd':
            Deck = LewdDeck(players)['cards']
            Pick50Cards(Deck);
            break;
        case 'Test':
            gameDeck = TestDeck(players)['cards']
            // Pick50Cards(Deck);
            break;
    }

    if (isLoading) {
        return <View><Text>Loading...</Text></View>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ headerShown: false, orientation: 'landscape' }} />
            <Card selecteddeck={gameDeck}></Card>
        </SafeAreaView>
    )
}

export default Game;