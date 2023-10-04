import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "52383a05-1980-43a0-9378-fe00796910cb"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

type GetTaskResponse = {
    error: string | null
    totalCount: number
    items: []
}

export const todolistsAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>("todo-lists")
    },
    createTodolist() {
        return instance.post<ResponseType<{
            item: TodolistType
        }>>("todo-lists", {title: "NewTodo"})
    },
    deleteTodolist() {
        const todolistId = "65711396-8846-43d8-848d-dde6a34daded"
        return instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
    },
    updateTodolistTitle() {
        const todolistId = "65711396-8846-43d8-848d-dde6a34daded"
        return instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title: "UpdatedNewTodo"})
    },
    getTasks(todolistID: string) {
        return instance.get<GetTaskResponse>(`todo-lists/${todolistID}/tasks`)
    }
}