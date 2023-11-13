import * as React from "react";
import { View, Text, Image } from 'react-native'
import { Link } from "expo-router";
import styles from './Deckselect.style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';


const Deckselect = (deck) => {
    useFonts({
        'Carter One': require('../../../assets/fonts/CarterOne-Regular.ttf'),
      });
    deck = deck['deck']
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('deck', value);
        } catch (e) {
            // saving error
        }
    };

    return (

        <Link style={styles.deckContainer} href={{ pathname: '/playerselect' }} onPress={() => {
            storeData(deck['name'])
        }}>
            
                <Text style={styles.deckTitle}>{deck['name']}{"\n"}</Text>
                <Text style={styles.deckText}>{deck['description']}</Text>
        </Link>
    )
}

export default Deckselect
