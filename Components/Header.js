import { TextInput, StyleSheet, View } from 'react-native'
import React from 'react'
import ButtonContainer from './ButtonContainer'
import { useState } from 'react'

const Header = ({ handleAdd }) => {

    const [input, setInput] = useState("");

    const handleAddAux = () => {
        console.log("1° " + input)
        if (input !== "") {
            console.log("2° " + input)
            handleAdd(input);
            setInput("");
        }
    }

    return (
        <View style={styles.topContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add todo"
                onChangeText={setInput}
                value={input}
            />
            <ButtonContainer onPress={() => handleAddAux()} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        flex: 0.1,
    },
    input: {
        borderRadius: 8,
        borderWidth: 2,
        width: "75%",
        marginRight: 25,
        paddingHorizontal: 12,
    }
})