import { StyleSheet } from "react-native";

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
    backgroundColor: 'blue'
  },
  cardDare: {
    display: `flex`,
    width: '100%',
    height: '100%',
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: 'red'
  },
  cardGame: {
    display: `flex`,
    width: '100%',
    height: '100%',
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: 'green'
  },
  cardText: {
    color: 'white',
    alignItems: `center`,
    marginVertical: `25px`,
    marginHorizontal: `30px`,
    fontSize: 24,
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
    fontSize: 36,
    color: 'white',
    // fontWeight: 'bold',
    marginBottom: 15
  }
});

export default styles;
