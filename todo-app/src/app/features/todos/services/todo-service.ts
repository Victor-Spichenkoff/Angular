import { Service, signal } from '@angular/core'

const STATES_KEY = 'todos_app_all_todos_key'

@Service()
export class TodoService {
    private _allStates = signal<TodoAppStates>(this.loadFromStorage())
    public allStates = this._allStates.asReadonly()

    countByGroup(groupId: string) {
        return {
            active: 1,
            done: 2,
            total: 3
        }
    }

    private loadFromStorage(): TodoAppStates {
        try {
            const raw = localStorage.getItem(STATES_KEY)
            if (raw) return JSON.parse(raw)
        } catch {}

        return { todos: [], groups: [
                {
                    title: "Gerais",
                    id: "1",
                },
                {
                    title: "Menos gerais",
                    id: "2",
                }
            ] }
    }
}
