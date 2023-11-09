import { React, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useFonts } from 'expo-font';

import styles from './Card.style'
import { Link } from 'expo-router';



const Card = ({ selecteddeck }) => {
  
  useFonts({
    'Carter One': require('../../../assets/fonts/CarterOne-Regular.ttf'),
  });
  const [card, setCard] = useState(selecteddeck[Math.floor(Math.random() * selecteddeck.length)])

  const getNewCard = () => {
    const newcard = selecteddeck[Math.floor(Math.random() * selecteddeck.length)];
    selecteddeck.splice(selecteddeck.indexOf(newcard), 1);
    setCard(newcard)
    console.log(card)
    console.log(selecteddeck.length)
  }

  if (card['type'] === 'Dare') {
    return (
      <Pressable style={styles.cardDare} onPress={() => {
        if (selecteddeck.length == 1) {
          setCard({
            "type": "Over",
            "challenge": "Game over"
          })
        }
        else {
          getNewCard();
        }
      }}>
        <Text style={styles.cardTitle}>Dare!</Text>
        <Text style={styles.cardText}>{card['challenge']}</Text>
        <View style={styles.cardDivider}></View>
        <Text style={styles.cardText}>{card['punishment']}</Text>
      </Pressable>
    )
  }
  else if (card['type'] === 'Game') {
    return (
      <Pressable style={styles.cardGame} onPress={() => {
        if (selecteddeck.length == 1) {
          setCard({
            "type": "Over",
            "challenge": "Game over"
          })
        }
        else {
          getNewCard();
        }
      }}>
        <Text style={styles.cardTitle}>Game!</Text>
        <Text style={styles.cardText}>{card['challenge']}</Text>
      </Pressable>
    )
  }
  else if (card['type'] === 'Normal') {
    return (
      <Pressable style={styles.cardNormal} onPress={() => {
        if (selecteddeck.length == 1) {
          setCard({
            "type": "Over",
            "challenge": "Game over"
          })
        }
        else {
          getNewCard();
        }
      }}>
        <Text style={styles.cardText}>{card['challenge']}</Text>
      </Pressable>
    )
  }
  else if (card['type'] === 'Over') {
    return (
      // <View style={styles.cardNormal}>
      <Link style={styles.cardNormal} href={{ pathname: "/" }}>
        <Text style={styles.cardTitle}>{card['challenge']}</Text>
      </Link>
      // </View>

    )
  }
}

export default Card