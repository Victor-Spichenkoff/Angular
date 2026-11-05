import { computed, effect, Service, signal } from '@angular/core';
import { ToDo } from '../pages/states-page/states-page';

const TODO_KEY = "_todos_storage_angular"

@Service()
export class TodoService {
    private _todos = signal<ToDo[]>(this.loadFromStorage()); // pega do storage como default, senão, ignora

    public todos = this._todos.asReadonly(); // como vai expôr
    public todosCount = computed(() => this._todos().length);

    constructor() {
        // salva sempre que a lista mudar
        effect(() => {
            localStorage.setItem(TODO_KEY, JSON.stringify(this._todos()));
        });
    }

    addToDo() {
        this._todos.update((current) => [
            ...current,
            { id: current.length, label: 'ToDo número ' + current.length, isDone: false },
        ]);
    }

    removeItem(id: number) {
        this._todos.update((current) => current.filter((t) => t.id !== id));
    }

    getById(id: number) {
        return this._todos().filter(x => x.id === id)[0];
    }

    private loadFromStorage(): ToDo[] {
        try {
            const raw = localStorage.getItem(TODO_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    }
}
