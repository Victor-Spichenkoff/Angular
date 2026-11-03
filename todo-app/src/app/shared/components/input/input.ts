import { Component, input, Signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
    imports: [FormsModule],
    selector: 'app-input',
    styles: ``,
    templateUrl: './input.html',
})
export class Input {
    state = input.required<Signal<any>>()
    type = input<string>('text')
    label = input<string>('')
    placeholder = input<string>('')
}
