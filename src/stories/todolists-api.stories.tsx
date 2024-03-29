import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolists-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '52383a05-1980-43a0-9378-fe00796910cb'
    }
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "newTitle"
        todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = "eba761b4-ee5e-4eb4-9d42-1f603c0468b7"
        todolistAPI.deleteTodolist(todoID)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoID = "c7cff945-402c-4d6c-ad23-0c0d229fc9f3"
        const title = "Red Wine"
        todolistAPI.updateTodolist(todoID, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistID = "d69511de-d770-464d-b795-7a8eef804ab5"
        todolistAPI.getTasks(todolistID)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistID = "d69511de-d770-464d-b795-7a8eef804ab5"
        const title = "newTask"
        todolistAPI.createTask(todolistID, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistID = "d69511de-d770-464d-b795-7a8eef804ab5"
        const title = "updatedNewTask"
        const taskID = "49892667-88c6-472f-856e-6a412ea90334"
        todolistAPI.updateTask(todolistID, taskID, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistID = "d69511de-d770-464d-b795-7a8eef804ab5"
        const taskID = "3b62dfe1-ff3a-4096-a1f8-600d5d4538a6"
        todolistAPI.deleteTask(todolistID, taskID)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}