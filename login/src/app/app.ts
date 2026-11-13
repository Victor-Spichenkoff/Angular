import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastContainerComponent } from './shared/components/toast/toast-container'
import { ConfirmHostComponent } from './shared/services/dialog/dialog-host';

@Component({
    imports: [RouterOutlet, ToastContainerComponent, ConfirmHostComponent],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App {}
