import * as React from "react";
import { View, Text, Image } from 'react-native'
import { Link } from "expo-router";
import styles from './Deckselect.style'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Deckselect = (deck) => {
    deck = deck['deck']
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('deck', value);
        } catch (e) {
            // saving error
        }
    };

    // const data = ['Normal', 'Lewd', 'Spicy']
    // const dataList = data.map((deck) => 
    //   <View>
    //       <Text>{deck}</Text>
    //   </View>
    // );
    // const width = Dimensions.get('window').width * 0.8;

    return (
        // <Link style={styles.deckContainer} href={{ pathname: '/playerselect' }} onPress={() => {
        //     storeData(deck['name'])
        // }}>
        //     <Text style={styles.deckTitle}>
        //         <Image style={styles.deckImage} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
        //         {deck['name']}
        //     </Text>
        // </Link>

        <Link style={styles.deckContainer} href={{ pathname: '/playerselect' }} onPress={() => {
            storeData(deck['name'])
        }}>
            {/* <Image style={styles.deckImage} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> */}
            <View>
                <Text style={styles.deckTitle}>{deck['name']}</Text>
                <Text style={styles.deckText}>{deck['description']}</Text>
            </View>

        </Link>
    )
}

export default Deckselect
