import { Component, computed, inject, input } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { TodoItem } from '../../components/todo/todo'

@Component({
    imports: [TodoItem],
    selector: 'app-todos-detail-page',
    styles: ``,
    templateUrl: './todos-detail-page.html',
})
export class TodosDetailPage {
    groupId = input.required<string>()
    todosService = inject(TodoService)

    allTodos = computed(() => this.todosService.getTodosByGroupId(this.groupId()))

    toggleTodo(todoId: string) {
      this.todosService.toggleTodo(todoId)
    }
}
