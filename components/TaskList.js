import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { getTasks, deleteTask } from '../Api';
import TaskItem from './TaskItem';
import { useIsFocused } from '@react-navigation/native';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const isFocused = useIsFocused();

    const callTaskFunc = () => {  
        getTasks().then(tasks => {
            setTasks(tasks);
        });
    };

    useEffect(() => {
        callTaskFunc();
    }, [isFocused]);

    return (
        <View>
            <FlatList
                style={{ width: '80%' }}
                showsVerticalScrollIndicator={false}
                data={tasks}
                renderItem={({ item }) => <TaskItem task={item} deleteTask={deleteTask} callTaskFunc={callTaskFunc} />}
            />
        </View>
    );
};

export default TaskList;