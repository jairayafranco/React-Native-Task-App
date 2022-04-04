import React, { useState, useEffect } from 'react';
import { TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from '../components/Layout';
import { addTask, editTask } from '../Api';

const TaskFormScreen = ({ navigation, route }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
    })

    const newTask = (name, value) => setTask({ ...task, [name]: value });

    useEffect(() => {
        if (route.params) {
            navigation.setOptions({ headerTitle: 'Editar Tarea' })
        }
    })

    const saveTask = () => {
        if (task.title == '' || task.description == '') {
            return alert('No puede dejar campos vacios');
        }

        addTask(task).then(() => navigation.navigate('HomeScreen'))
    }

    const editTaskCheck = () => {
        const newData = { 
            title: task.title || route.params.title, 
            description: task.description || route.params.description 
        };

        editTask(route.params.id, newData).then(() => navigation.navigate('HomeScreen'))
    }

    return (
        <Layout>
            <TextInput
                style={styles.input}
                placeholderTextColor='#fff'
                placeholder='Titulo'
                defaultValue={route.params ? route.params.title : ''}
                onChangeText={text => newTask('title', text)}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor='#fff'
                multiline={true}
                numberOfLines={2}
                placeholder='Descripcion'
                defaultValue={route.params ? route.params.description : ''}
                onChangeText={text => newTask('description', text)}
            />
            <TouchableOpacity
                style={!route.params ? styles.button : styles.buttonEdit}
                onPress={() => !route.params ? saveTask() : editTaskCheck()}>
                <Text style={styles.buttonText}>{!route.params ? 'Añadir Tarea' : 'Editar Tarea'}</Text>
            </TouchableOpacity>
        </Layout>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        margin: 6,
        width: '100%',
        borderRadius: 10,
        color: '#fff',
        borderColor: '#10ac84',
        fontSize: 16,
    },

    button: {
        backgroundColor: '#10ac84',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '50%',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },

    buttonEdit: {
        backgroundColor: '#e58e26',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '50%',
    }

});

export default TaskFormScreen;