import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deml',
  templateUrl: './deml.component.html',
  styleUrls: ['./deml.component.css']
})
export class DemlComponent implements OnInit {
  demoData: string = 'Demo component';

  constructor() { }

  ngOnInit() {
  }

  showAlert() {
    alert('hello from angular');
  }
}
