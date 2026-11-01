import { Service, signal } from '@angular/core'

const STATES_KEY = 'todos_app_all_todos_key'

@Service()
export class TodoService {
    private _allStates = signal<TodoAppStates>(this.loadFromStorage())
    public allStates = this._allStates.asReadonly()

    /*
     * GROUPS MANAGEMENT
     * */
    countByGroup(groupId: string) {
        const todos = this._allStates().todos.filter((t) => t.todoGroupId === groupId)

        let active = 0
        let done = 0
        todos.forEach((t) => {
            if (!t.isDone) active++
            else done++
        })

        return {
            active,
            done,
            total: active + done,
        }
    }

    /*
    * Retorna o novo group
    * Caso já exista, retorna null TODO: toast
    * */
    addGroup(title: string) {
        const group: TodosGroup = {
            id: crypto.randomUUID(),
            title,
        }

        if(this._allStates().groups.some(x => x.title.toLowerCase() === title.toLowerCase()))
            return null

        this._allStates.update((current) => ({
            todos: current.todos,
            groups: [...current.groups, group],
        }))
        return group
    }

    removeFromGroupById(groupId: string) {
        this._allStates.update((current) => ({
            todos: current.todos,
            groups: current.groups.filter((t) => t.id !== groupId),
        }))
    }


    /*
    * TODOS AREA
    * */

    getTodosByGroupId(groupId: string) {
        return this._allStates().todos.filter((t) => t.todoGroupId == groupId)
    }

    /*
     * GENERAL USAGE
     * */
    private loadFromStorage(): TodoAppStates {
        try {
            const raw = localStorage.getItem(STATES_KEY)
            if (raw) return JSON.parse(raw)
        } catch {}

        return {
            todos: [
                {
                    id: '1',
                    isDone: false,
                    todoGroupId: '1',
                    label: 'Teste',
                },
                {
                    id: '2',
                    isDone: true,
                    todoGroupId: '1',
                    label: 'Teste 2',
                },
            ],
            groups: [
                {
                    title: 'Gerais',
                    id: '1',
                },
                {
                    title: 'Menos gerais',
                    id: '2',
                },
            ],
        }
    }
}
