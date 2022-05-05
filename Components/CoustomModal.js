import { Modal, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colors } from '../Styles/Colors'


const CoustomModal = ({ modalVisible, setModalVisible, handleEdit, todoSelected, handleDelete }) => {


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={{ flexDirection: 'row' }}>


                <View style={{ flex: 1 }} />
                {/* MARGEN INICIAL */}



                <View style={styles.modalContainer}>
                    <View style={{ flex: 5 }}>
                        <TextInput
                            style={styles.input}
                            placeholder="Add todo"
                            onChangeText={handleEdit}
                            value={todoSelected.text}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cerrar}>
                            <Text >
                                Continue
                            </Text>
                        </TouchableOpacity>


                    </View>
                    <View style={styles.eliminar}>


                        <TouchableOpacity onPress={handleDelete} style={styles.buttonEliminar}>
                            <Text>Eliminar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flex: 1 }} />
                {/* MARGEN FINAL */}
            </View>
        </Modal>
    )
}

export default CoustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 24,
        flexDirection: 'row',
        alignContent: "center",
        paddingHorizontal: 8,
        // marginTop: "4%",
        marginLeft: 0,
        height: "100%",
        width: '90%',
        backgroundColor: colors.secundario,
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 50,
    },
    input: {
        backgroundColor: colors.terciario,
        // flex: 1,
        borderRadius: 8,
        borderWidth: 2,
        //width: "75%",
        marginRight: 5,
        marginVertical: 10,

        paddingHorizontal: 12,

    },
    cerrar: {
        backgroundColor: colors.terciario,
        // color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 80,
        marginBottom: 5,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 2,
        // paddingHorizontal: 10,
    },
    eliminar: {
        // flex: 1,
        //backgroundColor: "blue",
        // justifyContent: 'center'
        marginVertical: 20,
    },
    buttonEliminar: {
        borderRadius: 3,
        borderWidth: 3,
        backgroundColor: colors.terciario,
    }

})