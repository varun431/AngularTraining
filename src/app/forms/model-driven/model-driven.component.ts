import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { zipCodeValidator } from '../validators';

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

    constructor() {}

    ngOnInit() {}
}
