import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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

    @Input() curCurrency = null;

    constructor() {}

    ngOnInit() {}
}
