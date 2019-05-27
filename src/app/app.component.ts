import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'hello-world';
    currentCurrency = 'EUR';

    getCode(code) {
        console.log('in app', code);
        this.currentCurrency = code;
    }
}
