import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Styles/Colors'

const TodoItem = ({ todo, onPress }) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => onPress(todo)}>
                <Text style={styles.text}>{todo.text}</Text>

            </TouchableOpacity>
        </View>
    )
}

export default TodoItem

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.primario,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        marginVertical: 3,
    },
    text: {
        color: colors.terciario,
        fontSize: 18,
        marginVertical: 3,
    }
})