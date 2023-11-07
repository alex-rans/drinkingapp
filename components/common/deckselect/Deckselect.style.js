import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  deckContainer: {
    borderColor: '#171717',
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
    width: '60%',
    marginBottom: 15
  },
  deckImage: {
    marginRight: 12,
    width: 30,
    height: 30
  },
  deckText: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 24,
    color: 'white',
  }
});

export default styles;
