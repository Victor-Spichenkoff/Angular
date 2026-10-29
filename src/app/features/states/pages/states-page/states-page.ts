import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestState } from '../../components/test-state/test-state';

@Component({
    imports: [FormsModule, TestState],
    selector: 'app-states-page',
    styles: ``,
    templateUrl: './states-page.html',
    standalone: true
})
export class StatesPage {
    protected allToDos: WritableSignal<ToDo[]> = signal([]);
    protected onlyLessThan5: Signal<ToDo[]> = computed(() =>
        this.allToDos().filter((t) => t.id < 5),
    );

    addToDo() {
        this.allToDos.update((current) => [
            ...current,
            { id: current.length, label: 'ToDo número ' + current.length, isDone: false },
        ]);
    }

    removeItem(id: number) {
        this.allToDos.update((current) => current.filter((t) => t.id !== id));
    }

    // FORM
    protected nome = signal('');
}

export interface ToDo {
    id: number,
    label: string,
    isDone: boolean,
}
