import { Component, input } from '@angular/core'

@Component({
    imports: [],
    selector: 'app-tower-item',
    template: `
        <div class="flex flex-col">
            <div class="text-{{ color() }}-500 text-xs font-bold">{{ top() }}</div>
            <div class="text-xs text-center">{{ bottom() }}</div>
        </div>
    `,
})
export class TowerItem {
    top = input.required<string>()
    bottom = input.required<string>()
    color = input.required<'blue' | 'red' | 'green'>()
    // ngOnInit() {
    //     console.log(this.color())
    // }
}
