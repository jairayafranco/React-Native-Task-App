import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { getTasks, deleteTask } from '../Api';
import TaskItem from './TaskItem';
import { useIsFocused } from '@react-navigation/native';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        getTasks().then(tasks => {
            setTasks(tasks);
        });
    }, [isFocused]);

    return (
        <View>
            <FlatList
                style={{ width: '80%' }}
                showsVerticalScrollIndicator={false}
                data={tasks}
                renderItem={({ item }) => <TaskItem task={item} deleteTask={deleteTask} />}
            />
        </View>
    );
};

export default TaskList;