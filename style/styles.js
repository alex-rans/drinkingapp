import { StyleSheet } from "react-native";
import Namecard from "../components/common/namecard/Namecard";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454f5c',
    color: '#fff',
    width: `100%`,
    height: `100%`
  },
  playinputContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  centerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  selectedGame: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    color: '#fff',
    flex: 1
  },
  deck: {
    display: 'flex',
    with: '100%'
  },
  inputContainer: { 
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 50
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 18,
    borderRadius: 5,
    marginRight: 10,
    padding: 6,
    flex: 1
  },
  inputButton: {
    backgroundColor: 'green',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 5,
    color: 'white',
    padding: 6,
  },
  inputButtonDisabled: {
    backgroundColor: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 5,
    color: 'white',
    padding: 6,
    pointerEvents: "none"
  },
  namecardContainer: {
    display: 'flex',
    flexDirection:'row',
    marginHorizontal: 30,
    marginBottom: 10
  },
});

export default styles;