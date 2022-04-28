import { TouchableOpacity, Button, TextInput, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import Item from '../Components/Item'
import { colors } from '../Styles/Colors'
import ButtonContainer from '../Components/ButtonContainer'

const Layout = () => {

    const [input, setInput] = useState("")
    console.log(input);

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput style={styles.input}
                    placeholder="Add todo"
                    onChangeText={setInput}
                    value={input}
                />
                <ButtonContainer />
            </View>


            <View style={styles.itemList}>
                <Item item={{ id: 1, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 2, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 3, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 4, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 5, text: "Estudiar React Native" }}>  </Item>
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
        width: "75%",
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