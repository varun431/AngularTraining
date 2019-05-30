import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    private code = 'INR';
    // tslint:disable-next-line: max-line-length
    private currencySubject = new BehaviorSubject(this.code); // This is used to exchange the information. It helps in creating a observable.
    currencyObservable = this.currencySubject.asObservable();

    constructor() {}

    updateCurrency(currency: string) {
        this.code = currency;
        this.currencySubject.next(this.code);
    }
}
