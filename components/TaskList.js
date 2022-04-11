import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { getTasks, deleteTask } from '../Api';
import TaskItem from './TaskItem';
import { useIsFocused } from '@react-navigation/native';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    const isFocused = useIsFocused();

    const callTaskFunc = () => {
        getTasks().then(tasks => {
            setTasks(tasks);
            setLoading(true);
        });
    };

    useEffect(() => {
        callTaskFunc();
    }, [isFocused]);

    return (
        <View>
            {
                !loading
                    ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    )
                    : (
                        <FlatList
                            style={{ width: '80%' }}
                            showsVerticalScrollIndicator={false}
                            data={tasks}
                            renderItem={({ item }) => <TaskItem task={item} deleteTask={deleteTask} callTaskFunc={callTaskFunc} />}
                        />
                    )
            }

        </View>
    );
};

export default TaskList;