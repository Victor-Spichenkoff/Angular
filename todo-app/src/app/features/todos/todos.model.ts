interface Todo {
    id: string
    label: string
    isDone: boolean
    todoGroupId: string
}

interface TodosGroup {
    id: string
    title: string
}


interface TodoAppStates {
    todos: Todo[]
    groups: TodosGroup[]
}
