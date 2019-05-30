import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-template-driven',
    templateUrl: './template-driven.component.html',
    styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    saveData(form: NgForm) {
        console.log(form.status);
        this.router.navigate(['forms', 'model', form.value.name], {
            queryParams: {
                age: form.value.age
            }
        });
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
