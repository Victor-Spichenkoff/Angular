import { Component, computed, inject, input } from '@angular/core'
import { TodoService } from '../../services/todo-service'
import { TowerItem } from '../tower-item'
import { RouterLink } from '@angular/router'
import { Card } from '../../../../shared/components/card/card'
import { AppIcon } from '../../../../shared/components/app-icon/app-icon'
import { DialogService } from '../../../../shared/services/dialog/dialog-service'

@Component({
    imports: [TowerItem, RouterLink, Card, AppIcon],
    selector: 'app-group-item',
    styles: ``,
    templateUrl: './group-item.html',
})
export class GroupItem {
    todosService = inject(TodoService)
    group = input.required<TodosGroup>()

    count = computed(() => this.todosService.countByGroup(this.group().id))

    dialog = inject(DialogService)

    async removeGroup() {
        const isYes = await this.dialog.ask({
            title: "You really want to delete this group?",
            message: "This action will delete all the todos in this group and cannot be undone.",
            confirmText: "Delete",
        })

        if(!isYes) return

        this.todosService.removeGroupById(this.group().id)
    }
}
