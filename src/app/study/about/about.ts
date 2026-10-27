import { Component, signal } from '@angular/core';

@Component({
    imports: [],
    selector: 'app-about',
    styleUrl: './about.css',
    templateUrl: './about.html',
})
export class About {
    protected readonly title = signal("Página Sobre")

    protected addValue(){
        this.title.set(this.title() == "Página Sobre" ?  "Novo valor" : "Página Sobre")
    }
}
