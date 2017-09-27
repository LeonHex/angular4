import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  testVar = 'hex';
  form;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('GGGGGGGG'),
      lastName: new FormControl('Yang'),
      level: new FormControl('4')
    });
  }

  submitFunc(value) {
    console.log(value);
  }

}
