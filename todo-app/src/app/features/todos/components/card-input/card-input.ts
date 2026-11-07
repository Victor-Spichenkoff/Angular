import { Component, input, output, signal } from '@angular/core'
import { Input } from '../../../../shared/components/input/input'
import { Card } from '../../../../shared/components/card/card'
import { AppIcon } from '../../../../shared/components/app-icon/app-icon'

@Component({
    imports: [Input, Card, AppIcon],
    selector: 'app-card-input',
    templateUrl: './card-input.html',
    standalone: true,
})
export class CardInput {
    inputValue = signal('')
    placeholder = input("Name...")

    submitEvent = output<string>()

    emitEvent() {
        this.submitEvent.emit(this.inputValue())
        this.inputValue.set('')
    }
}
