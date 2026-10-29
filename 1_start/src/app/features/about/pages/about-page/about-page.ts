import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    imports: [RouterLink],
    selector: 'app-about-page',
    templateUrl: './about-page.html',
})
export class AboutPage {
    consolar(){
        console.log("About Page");
    }
}
