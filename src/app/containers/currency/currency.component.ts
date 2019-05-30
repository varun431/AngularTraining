import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
    currencies = ['INR', 'USD', 'EUR', 'GBP', 'CAD'];
    // @Output() selectedCode = new EventEmitter();

    constructor(private cService: CurrencyService) {}

    ngOnInit() {}

    sendCode(code: any) {
        console.log(code);
        // this.selectedCode.emit({ data: code });
        this.cService.updateCurrency(code);
    }
}
