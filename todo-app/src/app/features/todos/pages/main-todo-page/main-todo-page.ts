import { Component, inject } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { GroupItem } from '../../components/group-item/group-item'

@Component({
    imports: [GroupItem],
    selector: 'app-main-todo-page',
    styles: ``,
    templateUrl: './main-todo-page.html',
})
export class MainTodoPage {
    todosService = inject(TodoService)

    groups = this.todosService.allStates().groups
}
