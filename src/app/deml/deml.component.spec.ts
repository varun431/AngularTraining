import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemlComponent } from './deml.component';

describe('DemlComponent', () => {
    let component: DemlComponent;
    let fixture: ComponentFixture<DemlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DemlComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DemlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
