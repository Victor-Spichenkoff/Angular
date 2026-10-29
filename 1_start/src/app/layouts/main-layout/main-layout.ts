import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterLink, RouterOutlet],
    selector: 'app-main-layout',
    templateUrl: './main-layout.html',
})
export class MainLayout {}
