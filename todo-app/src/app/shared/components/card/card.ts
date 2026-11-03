import { Component, input } from '@angular/core'

@Component({
    imports: [],
    selector: 'app-card',
    styleUrl: './card.css',
    templateUrl: './card.html',
})
export class Card {
    notTranslate = input<boolean>(false)
}
