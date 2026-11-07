import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastContainerComponent } from './shared/components/toast/toast-container';

@Component({
    imports: [RouterOutlet, ToastContainerComponent],
    selector: 'app-root', // isso que é usado no index.html
    styleUrl: './app.css', // onde fica o css desse componente
    templateUrl: './app.html', // onde fica o html desse componente
})
export class App {
    protected readonly title = signal('todo-app');
}
