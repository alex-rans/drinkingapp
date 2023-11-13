import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter} from "expo-router";
import Deckselect from "../components/common/deckselect/Deckselect";
import styles from "../style/styles";

const Home = () => {
    // const data = ['Normal', 'Lewd', 'Spicy', 'Test']
    const data = [
        {
            name: 'Normal',
            description: 'Wholesome fun for the whole family',
            imgurl: ''
        },
        {
            name: 'Lewd',
            description: 'A little bit of naughty fun you can have in group',
            imgurl: ''
        },
        {
            name: 'Spicy',
            description: 'Prepare to get dirty',
            imgurl: ''
        },
        {
            name: 'Test',
            description: 'I cant code for shit and need this to develop',
            imgurl: ''
        }
    ]

    const decks = data.map((deck) => 
        <Deckselect deck={deck} style={styles.deck} key={deck['name']}></Deckselect>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{headerShown: false}}/>
            <View style={styles.centerContainer}>
                {decks}
            </View>
        </SafeAreaView>
    )
}

export default Home;