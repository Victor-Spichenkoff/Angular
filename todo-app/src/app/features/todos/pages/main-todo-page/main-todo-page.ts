import { Component, computed, inject } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { GroupItem } from '../../components/group-item/group-item'
import { CardInput } from '../../components/card-input/card-input'
import { Toast } from '../../../../shared/components/toast/toast'

@Component({
    imports: [GroupItem, CardInput],
    selector: 'app-main-todo-page',
    styles: ``,
    templateUrl: './main-todo-page.html',
})
export class MainTodoPage {
    todosService = inject(TodoService)
    toast = inject(Toast)

    groups = computed(() => this.todosService.allStates().groups)


    addGroup(title: string) {
        if(title == null || title.trim() == '') 
            return this.toast.error("Group name cannot be empty.")

        const group = this.todosService.addGroup(title)
        if (group == null)
            this.toast.error("A group with this name already exists.")    
    }
}