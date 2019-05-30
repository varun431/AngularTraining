import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { zipCodeValidator } from '../validators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-model-driven',
    templateUrl: './model-driven.component.html',
    styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit {
    userForm: FormGroup = new FormGroup(
        {
            name: new FormControl(null, [
                Validators.required,
                Validators.minLength(5)
            ]),
            age: new FormControl(23, [Validators.required]),
            address: new FormGroup({
                city: new FormControl(null, { updateOn: 'change' }),
                pincode: new FormControl(null, [
                    Validators.required,
                    zipCodeValidator
                ])
            })
        },
        { updateOn: 'submit' }
    );

    constructor(private activeRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activeRoute.paramMap.subscribe(param => {
            console.log('name', param.get('name'));
            this.userForm.patchValue({ name: param.get('name') });
        });

        this.activeRoute.queryParamMap.subscribe(param => {
            console.log('age', param.get('age'));
            this.userForm.patchValue({ age: param.get('age') });
        });
    }
}
