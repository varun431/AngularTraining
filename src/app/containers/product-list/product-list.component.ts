import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
    pList: Product[] = [
        {
            productId: 1000,
            productImage: 'assets/asuas.jpg',
            productName: 'Product 1',
            productPrice: 12000,
            productStock: true,
            productAltImage: 'assets/asus_alt.jpg'
        },
        {
            productId: 1200,
            productImage: 'assets/asus.jpg',
            productName: 'Product 1',
            productPrice: 5000,
            productStock: false,
            productAltImage: 'assets/asus_alt.jpg'
        }
    ];
    cService$: Subscription; // $ is used to identify that it's an observable variable
    curCurrency: string;

    constructor(
        private pService: ProductService,
        private cService: CurrencyService
    ) {}

    ngOnInit() {
        this.getCode();

        this.pService.getProducts().subscribe(
            data => {
                this.pList = data as Product[];
            },
            err => {
                console.log('error', err);
            }
        );
    }

    ngOnDestroy() {
        this.cService$.unsubscribe();
    }

    getCode() {
        this.cService$ = this.cService.currencyObservable.subscribe(
            code => {
                this.curCurrency = code;
            },
            err => {
                console.log('error', err);
            }
        );
    }
}
