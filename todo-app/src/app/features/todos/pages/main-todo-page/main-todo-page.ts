import { Component, computed, inject } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { GroupItem } from '../../components/group-item/group-item'
import { CardInput } from '../../components/card-input/card-input'

@Component({
    imports: [GroupItem, CardInput],
    selector: 'app-main-todo-page',
    styles: ``,
    templateUrl: './main-todo-page.html',
})
export class MainTodoPage {
    todosService = inject(TodoService)

    groups = computed(() => this.todosService.allStates().groups)
}