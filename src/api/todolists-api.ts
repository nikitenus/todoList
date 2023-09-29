import axios from "axios";

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}
type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}
type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}


const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "52383a05-1980-43a0-9378-fe00796910cb"
    }
}

export const todolistsAPI = {
    getTodolists() {
        return axios.get<Array<TodolistType>>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
    },
    createTodolist() {
        return axios.post<CreateTodolistResponseType>("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: "NewTodo"}, settings)
    },
    deleteTodolist() {
        const todolistId = "65711396-8846-43d8-848d-dde6a34daded"
        return axios.delete<DeleteTodolistResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodolistTitle() {
        const todolistId = "65711396-8846-43d8-848d-dde6a34daded"
        return axios.put<UpdateTodolistResponseType>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: "UpdatedNewTodo"}, settings)
    }
}