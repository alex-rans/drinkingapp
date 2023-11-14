import { useEffect, useState } from "react";
import { View, Text, ScrollView, SafeAreaView, TextInput, Pressable } from "react-native";
import { Stack, useRouter, Link } from "expo-router";
import styles from "../../style/styles";
import Namecard from "../../components/common/namecard/Namecard";
import AsyncStorage from '@react-native-async-storage/async-storage';

let test = []
const Playerselect = () => {
  const [deck, setDeck] = useState('Loading...');
  const [playerinput, setPlayInput] = useState('name')
  const [players, setPlayers] = useState([])
  const [reload, setReload] = useState()


  useEffect(() => {
    AsyncStorage.getItem('players').then((jsonvalue) => {
      const playervalue = JSON.parse(jsonvalue)
      if (playervalue.length !== 0) {
        setPlayers(playervalue)
        test = playervalue
        console.log(test)
      }
    });

    AsyncStorage.getItem('deck').then((value) => {
      setDeck(value);
    })
  }, [])

  async function storeData(value) {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('players', jsonValue);
  };

  function submitName() {
    //I have no fucking clue as to why pushing to test somehow adds it to the players list
    //React is full of mysteries.
    //It kinda works so who cares
    test.push(playerinput);
    setPlayers(test)
    console.log(players)
    storeData(players)
    setPlayInput('')
  }

  function removeName(player) {
    test.splice(test.indexOf(player), 1);
    setPlayers(test)
    console.log(players)
    //this is stupid
    setReload(Math.random() * (0 - 999999) + 999999)
  }

  const playerlabels = players.map((player) =>
    <Pressable onPress={() => {
      removeName(player)
    }}>
      <Namecard name={player} key={player}></Namecard>
    </Pressable>
  );

  let link = <Link href={{ pathname: "/game" }} style={styles.inputButton}>Start</Link>
  if (players.length < 2) {
    link = <Text style={styles.inputButtonDisabled}>Start</Text>
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
            onSubmitEditing={() => submitName()}
          />
          {link}
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Playerselect;