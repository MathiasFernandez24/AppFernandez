import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'
import { TouchableOpacity } from 'react-native'

const ButtonContainer = () => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>Add todo</Text>
        </TouchableOpacity>
    )
}

export default ButtonContainer

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.rosa,
        padding: 4,
        borderRadius: 10,
        borderWidth: 2,
        width: "25%",
    },
    text: {
        fontSize: 15,
        color: colors.negro,
    }
})