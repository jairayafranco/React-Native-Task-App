import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TaskItem = ({ task, deleteTask, callTaskFunc }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                style={{ flexWrap: 'wrap' }}
                onPress={() => navigation.navigate('TaskFormScreen', { id: task.id, title: task.title, description: task.description })}>
                <Text style={styles.itemTitle}>{task.title}</Text>
                <Text style={styles.itemDescription}>{task.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemDelete} onPress={() => { deleteTask(task.id), callTaskFunc() }}>
                <Text>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    itemTitle: {
        fontSize: 20,
        color: '#fff',
    },

    itemDescription: {
        fontSize: 16,
        color: '#ccc',
        maxWidth: 200,
    },

    itemDelete: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#ee5253',
    },
});

export default TaskItem;