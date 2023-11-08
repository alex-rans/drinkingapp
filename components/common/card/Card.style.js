import { StyleSheet } from "react-native";
import { useFonts } from 'expo-font';



const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "red"
  },
  cardNormal: {
    display: `flex`,
    width: '100%',
    height: '100%',
    alignItems: `center`,
    justifyContent: `space-around`,
    backgroundColor: '#454f5c'
  },
  cardDare: {
    display: `flex`,
    width: '100%',
    height: '100%',
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: '#91143c'
  },
  cardGame: {
    display: `flex`,
    width: '100%',
    height: '100%',
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: '#008000'
  },
  cardText: {
    color: 'white',
    alignItems: `center`,
    marginVertical: `15px`,
    marginHorizontal: `30px`,
    fontSize: 28,
    textAlign: `center`,
  },
  cardDivider: {
    width: `85%`,
    borderBottomColor: `white`,
    borderBottomWidth: 3,
    marginVertical: 20,
  },
  cardTitle: {
    fontFamily: 'Carter One, sans-serif',
    fontSize: 58,
    color: 'white',
  }
});

export default styles;
