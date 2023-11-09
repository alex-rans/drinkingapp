import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  deckContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    borderColor: '#171717',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 15
  },
  deckImage: {
    margin: 12,
    width: 25,
    height: 25
  },
  deckTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 24,
    color: 'white',
  },
  deckText: {
    color: 'white',
    maxWidth: '100%',
    overflow: 'hidden'
  }
});

export default styles;
