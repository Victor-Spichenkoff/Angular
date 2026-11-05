import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterLink, RouterOutlet, RouterLinkActive],
    selector: 'app-main-layout',
    templateUrl: './main-layout.html',
})
export class MainLayout {}
