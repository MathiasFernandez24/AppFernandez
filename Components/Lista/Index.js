import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TodoItem from './TodoItem'
import { colors } from '../../Styles/Colors'


/**
 * Componente "Lista" para renderizar todos
 * @param handleModal Manejar visibilidad del modal
 * @param todoList Listado de todos
 * @returns 
 */

const Lista = ({ handleModal, todoList }) => {

    const renderTodo = ({ item }) => <TodoItem onPress={handleModal} todo={item}></TodoItem>

    return (
        <View style={styles.itemList}>
            {/* <Item item={{ id: 1, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 2, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 3, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 4, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 5, text: "Estudiar React Native" }}>  </Item> */}
            {todoList.length > 0 ?
                <FlatList
                    data={todoList}
                    keyExtractor={todo => todo.id}
                    renderItem={renderTodo}
                />


                // No vamos a usar Map, se usa flatList, para que solo renderice lo que se ve
                //    todoList.map(item => <Item item={item} key={item.id} />)
                :
                <Text>No hay Items cargados</Text>
            }
        </View>
    )
}

export default Lista

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: colors.terciario,
        width: "100%",
        padding: 10,
        borderRadius: 5,
        //height: "90%", //en vez de flex se puede poner el %
        flex: 0.9,
    },

})