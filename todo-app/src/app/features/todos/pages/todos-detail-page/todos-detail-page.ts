import { Component, computed, inject, input, signal } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { TodoItem } from '../../components/todo/todo'
import { CardInput } from '../../components/card-input/card-input'
import { Toast } from '../../../../shared/components/toast/toast'

@Component({
    imports: [TodoItem, CardInput],
    selector: 'app-todos-detail-page',
    styles: ``,
    templateUrl: './todos-detail-page.html',
})
export class TodosDetailPage {
    groupId = input.required<string>()
    todosService = inject(TodoService)
    toast = inject(Toast)

    newLabel = signal('')

    allTodos = computed(() => this.todosService.getTodosByGroupId(this.groupId()))

    toggleTodo(todoId: string) {
        this.todosService.toggleTodo(todoId)
    }

    addTodo(label?: string) {
        const finalLabel = label ?? this.newLabel()

        if (finalLabel == null || finalLabel.trim() == '')
            return this.toast.error("Todo label cannot be empty.")

        this.todosService.addTodo(this.groupId(), finalLabel)
        this.newLabel.set('')
    }

}
