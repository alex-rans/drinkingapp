import { React, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { LewdDeck } from '../../../assets/decks/lewdDeck'

import styles from './Card.style'


// console.log(Card(getNewCard()))

const Card = ({ selecteddeck }) => {
  // const [type, setType] = useState(Deck[Math.floor(Math.random() * Deck.length)]['type']);
  const [card, setCard] = useState(Deck[Math.floor(Math.random() * Deck.length)])
  // const [challenge, setChallenge] = useState(Deck[Math.floor(Math.random() * Deck.length)]['challenge']);
  // const [punishment, setPunishment] = useState(Deck[Math.floor(Math.random() * Deck.length)]['challenge']);

  const getNewCard = () => {
    const newcard = Deck[Math.floor(Math.random() * Deck.length)];
    Deck.splice(Deck.indexOf(newcard), 1);
    setCard(newcard)
    console.log(newcard)
  }

  if (card['type'] === 'Dare') {
    return (
      <Pressable style={styles.cardDare} onPress={() => {
        if (Deck.length == 1) {
          console.log('asshat')
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
        if (Deck.length == 1) {
          console.log('asshat')
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
        if (Deck.length == 1) {
          console.log('asshat')
        }
        else {
          getNewCard();
        }
      }}>
        <Text style={styles.cardText}>{card['challenge']}</Text>
      </Pressable>
    )
  }
}

export default Card