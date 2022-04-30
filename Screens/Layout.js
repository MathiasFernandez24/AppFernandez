import { Modal, FlatList, TouchableOpacity, Button, TextInput, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import TodoItem from '../Components/TodoItem'
import { colors } from '../Styles/Colors'
import ButtonContainer from '../Components/ButtonContainer'

const Layout = () => {

    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [idSelected, setIdSelected] = useState("");

    // console.log(input);

    const handleAdd = () => {
        if (input !== "") {
            setTodoList([...todoList, { id: Date.now(), text: input }])
            setInput("");
        }
    }

    console.log(todoList);

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item.id !== idSelected)
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }
    const handleModal = (id) => {
        setModalVisible(true)
        setIdSelected(id);
    }
    const renderTodo = ({ item }) => <TodoItem onPress={handleModal} todo={item}></TodoItem>


    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput style={styles.input}
                    placeholder="Add todo"
                    onChangeText={setInput}
                    value={input}
                />
                <ButtonContainer onPress={handleAdd} />
            </View>


            <View style={styles.itemList}>
                {/* <Item item={{ id: 1, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 2, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 3, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 4, text: "Estudiar React Native" }}>  </Item>
                <Item item={{ id: 5, text: "Estudiar React Native" }}>  </Item> */}
                {todoList.length !== 0 ?
                    <FlatList
                        data={todoList}
                        keyExtractor={todo => todo.id}
                        renderItem={renderTodo}
                    />


                    // No vamos a usar Map, se usa flatList, para que solo renderice lo que se ve
                    //    todoList.map(item => <Item item={item} key={item.id} />)
                    :
                    <Text>No hay todos cargados</Text>
                }
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text>
                            X
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleDelete}>
                        <Text>
                            Eliminar todo
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>

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
        height: "100%",
    },
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
    },
    itemList: {
        backgroundColor: colors.rosaClaro,
        width: "100%",
        padding: 10,
        borderRadius: 5,
        //height: "90%", //en vez de flex se puede poner el %
        flex: 0.9,
    },
    modalContainer: {
        paddingLeft: 8,
        marginTop: 50,
        marginLeft: 50,
        height: 200,
        width: 300,
        backgroundColor: colors.rosa,
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 50,

    }

})