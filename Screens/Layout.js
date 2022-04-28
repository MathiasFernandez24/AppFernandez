import { Button, TextInput, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from '../Components/Item'
import { colors } from '../Styles/Colors'

const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput style={styles.input}
                />
                <Button title='add todo'
                />
            </View>


            <View style={styles.itemList}>
                <Item item={{ id: 1, text: "Estudiar React Native" }}>
                </Item>
            </View>

        </View>

    )
}

export default Layout

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,

    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: "80%",
        marginRight: 25,
        paddingHorizontal: 12,
    },
    itemList: {
        backgroundColor: colors.rosaClaro,
        width: "100%",
        padding: 10,
        borderRadius: 5,
    }
})