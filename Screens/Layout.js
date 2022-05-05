import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import Header from '../Components/Header'
import Lista from '../Components/Lista/Index'
import CoustomModal from '../Components/CoustomModal'

const Layout = () => {

    const [todoList, setTodoList] = useState([]);
    const [todoSelected, setTodoSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);



    const handleAdd = (input) => {
        console.log("3° " + input);
        {
            setTodoList([{ id: Date.now(), text: input }, ...todoList])
        }
    }

    //console.log(todoList);

    const handleDelete = () => {
        const todosFiltrados = todoList.filter(item => item.id !== todoSelected.id)
        setTodoList(todosFiltrados);
        setModalVisible(false);
    }
    const handleModal = (todoSelected) => {
        setModalVisible(true)
        setTodoSelected(todoSelected);
    }
    const handleEdit = (text) => {
        const todoToEdit = todoList.find(todo => todo.id === todoSelected.id)
        // const todoListFiltered = todoList.filter(todo => todo.id !== todoSelected.id)
        todoToEdit.text = text
        setTodoList([...todoList])
    }



    return (
        <View style={styles.container}>
            <Header handleAdd={() => handleAdd()} />
            <Lista handleModal={handleModal} todoList={todoList} />
            <CoustomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                todoSelected={todoSelected}
            />


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
})