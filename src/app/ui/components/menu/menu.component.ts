import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuModel } from '../../shared/menu.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [MenuService]
})
export class MenuComponent implements OnInit {
    menuItems: MenuModel[] = [];

    constructor(private mService: MenuService) {}

    ngOnInit() {
        this.mService.getMenuItems().subscribe(
            (items: MenuModel[]) => {
                this.menuItems = items;
            },
            err => {
                console.log('error', err);
            }
        );
    }
}
