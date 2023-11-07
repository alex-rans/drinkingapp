import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter} from "expo-router";
import Deckselect from "../components/common/deckselect/Deckselect";
import styles from "../style/styles";

const Home = () => {
    const data = ['Normal', 'Lewd', 'Spicy', 'Test']
    const decks = data.map((deck) => 
        <Deckselect name={deck} style={styles.deck} key={deck}></Deckselect>
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