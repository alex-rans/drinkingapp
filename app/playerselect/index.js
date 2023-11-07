import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import styles from "../../style/styles";
import Namecard from "../../components/common/namecard/Namecard";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Playerselect = () => {
  const [deck, setDeck] = useState('Loading...');
  const [playerinput, setPlayInput] = useState('name')
  const [players, setPlayers] = useState([])

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('deck');
      if (value !== null) {
        setDeck(value);
      }
    } catch (e) {
    }
  };

  const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('players', jsonValue);
    } catch (e) {
        // saving error
    }
};

  const submitName = () => {
    setPlayers(players => [...players, playerinput])
  }

  const playerlabels = players.map((player) => 
        <Namecard name={player} key={player}></Namecard>
  );
  
  storeData(players)
  getData();
  let link = <Link href={{ pathname: "/game" }} style={styles.inputButton}>Start</Link>
  if(players.length < 2) {
    link = <Link href={{ pathname: "/game" }} style={styles.inputButtonDisabled}>Start</Link>
  }
  return (

    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.selectedGame}>Deck: {deck}</Text>
      <View>
        <View style={styles.namecardContainer}>
        {playerlabels}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={playerinput}
            onChangeText={setPlayInput}
            defaultValue={playerinput}
            onSubmitEditing={() => submitName()}
          />
          {link}
          {/* <Link href={{ pathname: "/game" }} style={styles.inputButton}>Start</Link> */}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Playerselect;