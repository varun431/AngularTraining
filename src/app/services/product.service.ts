import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
    private modelUrl =
        'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';

    constructor(private http: HttpClient) {}

    getProducts() {
        return this.http.get(this.modelUrl);
    }
}
