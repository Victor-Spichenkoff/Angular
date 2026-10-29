import { Component, computed, inject, input, output } from '@angular/core';
import { ToDo } from '../../pages/states-page/states-page';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo-service';

@Component({
    imports: [FormsModule],
    selector: 'app-test-state',
    styles: ``,
    templateUrl: './test-state.html',
    standalone: true,
})
export class TestState {
    todo = input.required<ToDo>();
    remove = output<number>(); // vai emitir o ID

    // pega o mesmo que já tinha tem injetado
    todosService = inject(TodoService);
    todosCount = this.todosService.todosCount

    removeBtnClick(id: number) {
        this.remove.emit(id);
    }
}
