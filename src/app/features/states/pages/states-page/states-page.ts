import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestState } from '../../components/test-state/test-state';
import { TodoService } from '../../services/todo-service';

@Component({
    imports: [FormsModule, TestState],
    selector: 'app-states-page',
    styles: ``,
    templateUrl: './states-page.html',
    standalone: true
})
export class StatesPage {
    // protected allToDos: WritableSignal<ToDo[]> = signal([]);
    todoService = inject(TodoService);

    todos = this.todoService.todos;// passa sem chamar, o valor inteiro


    protected onlyLessThan5: Signal<ToDo[]> = computed(() =>
        this.todos().filter((t) => t.id < 5),// ainda dá para usar derivados
    );

    // addToDo() {
    //     this.allToDos.update((current) => [
    //         ...current,
    //         { id: current.length, label: 'ToDo número ' + current.length, isDone: false },
    //     ]);
    // }
    //
    // removeItem(id: number) {
    //     this.allToDos.update((current) => current.filter((t) => t.id !== id));
    // }

    // FORM
    protected nome = signal('');
}

export interface ToDo {
    id: number,
    label: string,
    isDone: boolean,
}
