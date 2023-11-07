import * as React from "react";
import { View, Text, Image } from 'react-native'
import styles from './Namecard.style'

const Namecard = ({name}) => {
    return (
        <Text style={styles.text}>{name}</Text>
    )
}
export default Namecard
