import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-driven',
    templateUrl: './template-driven.component.html',
    styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    saveData(form: any) {
        console.log(form.status);
    }

    loadData(formData: NgForm) {
        const user = {
            name: 'Thanos',
            age: '54',
            address: {
                city: 'New York',
                pincode: '10001'
            }
        };

        formData.form.setValue(user);
    }

    patchData(formData: NgForm) {
        const user = {
            name: 'Thanos',
            age: '54'
        };

        formData.form.patchValue(user); // partial update. setValue() for full update.
    }
}
