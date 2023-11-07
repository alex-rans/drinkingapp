import * as React from "react";
import { View, Text, Image } from 'react-native'
import { Link } from "expo-router";
import styles from './Deckselect.style'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Deckselect = (deck) => {
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
        <Link style={styles.deckContainer} href={{ pathname: '/playerselect' }} onPress={() => {
            storeData(deck['name'])
        }}>
            <Text style={styles.deckText}>
                <Image style={styles.deckImage} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                {deck['name']}
            </Text>
        </Link>
    )
}

export default Deckselect
