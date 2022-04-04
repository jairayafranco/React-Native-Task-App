const url = 'http://192.168.1.8:3000/tasks';

export const getTasks = async () => {
    const response = await fetch(url);
    return await response.json();
};

export const addTask = async (task) => {
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
}

export const deleteTask = async (id) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE'
    });
    return await response.json();
}

export const editTask = async (id, task) => {
    await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
}