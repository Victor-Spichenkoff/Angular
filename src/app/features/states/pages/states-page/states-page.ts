import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-states-page',
    styles: ``,
    templateUrl: './states-page.html',
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

    // FORM
    protected nome = signal("");
}

export interface ToDo {
    id: number,
    label: string,
    isDone: boolean,
}
