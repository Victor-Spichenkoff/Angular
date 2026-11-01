import { Component, computed, inject, input } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { TowerItem } from '../tower-item'
import { RouterLink } from '@angular/router'

@Component({
    imports: [TowerItem, RouterLink],
    selector: 'app-group-item',
    styles: ``,
    templateUrl: './group-item.html',
})
export class GroupItem {
    todosService = inject(TodoService)
    group = input.required<TodosGroup>()

    count = computed(() => this.todosService.countByGroup(this.group().id))
}
