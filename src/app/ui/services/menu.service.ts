import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {
    constructor(private http: HttpClient) {}

    getMenuItems() {
        return this.http.get('assets/menu.json');
    }
}
