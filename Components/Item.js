import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const Item = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.rosa,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
    },
    text: {
        color: colors.rosaClaro
    }
})