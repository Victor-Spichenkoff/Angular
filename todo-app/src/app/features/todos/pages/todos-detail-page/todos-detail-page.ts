import { Component, computed, inject, input, signal } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { TodoItem } from '../../components/todo/todo'
import { Input } from '../../../../shared/components/input/input'
import { Card } from '../../../../shared/components/card/card'
import { AppIcon } from '../../../../shared/components/app-icon/app-icon'

@Component({
    imports: [TodoItem, Input, Card, AppIcon],
    selector: 'app-todos-detail-page',
    styles: ``,
    templateUrl: './todos-detail-page.html',
})
export class TodosDetailPage {
    groupId = input.required<string>()
    todosService = inject(TodoService)

    newLabel = signal('')

    allTodos = computed(() => this.todosService.getTodosByGroupId(this.groupId()))

    toggleTodo(todoId: string) {
        this.todosService.toggleTodo(todoId)
    }

    addTodo() {
        this.todosService.addTodo(this.groupId(), this.newLabel())
        this.newLabel.set('')
    }
}
