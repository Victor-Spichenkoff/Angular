import { Component, computed, input } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
    imports: [NgClass],
    selector: 'app-tower-item',
    template: `
        <div class="flex flex-col">
            <div
                [ngClass]="finalColor()"
                class="text-xs font-bold"
                [class.finalColor()]="true"
            >
                {{ top() }}
            </div>
            <div class="text-xs text-center">{{ bottom() }}</div>
        </div>
    `,
})
export class TowerItem {
    top = input.required<string>()
    bottom = input.required<string>()
    color = input.required<'blue' | 'red' | 'green'>()
    finalColor = computed(() => `text-${this.color()}-500`)
    // ngOnInit() {
    //     console.log(this.color())
    // }
}
