import { Component, computed, inject, input } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { TestState } from '../../components/test-state/test-state';

@Component({
    imports: [TestState],
    selector: 'app-detail-todo-page',
    templateUrl: './detail-todo-page.html',
})
export class DetailTodoPage {
    todosService = inject(TodoService);

    // id = input.required<number>(); // sempre string
    id = input.required<string>(); // sempre string

    // não fica disponível de cara
        // ou usa computed
    currentTodo = computed(() => this.todosService.getById(Number(this.id())));
        // ou usa ngOnInit
    ngOnInit() {
        // se não for variável
    }
}
