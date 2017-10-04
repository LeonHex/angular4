import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  animations: [
    trigger('submitClicked', [
      state('smaller', style({
        transform: 'scale(1)'
      })),
      state('larger', style({
        transform: 'scale(3)'
      })),
      transition('smaller <=> larger', animate('1s ease-in'))
    ])
  ]
})
export class Comp1Component implements OnInit {
  testVar = 'hex';
  form;
  testS;
  state = 'smaller';

  constructor(testS: TestServiceService) {
    this.testS = testS;
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('GGGGGGGG', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])),
      lastName: new FormControl('Yang', Validators.compose([
        this.textVal
      ])),
      level: new FormControl('4')
    });
  }

  textVal(control) {
    console.log(control.value);
    if (control.value.length < 3) {
      return {'textVal': {value: control.value}};
    } else {
      return null;
    }
  }

  submitFunc(value) {
    console.log(value);
    console.log(this.testS.success());
    console.log(this.testS.obj);
    this.testS.fetchData();
  }

  buttonClicked() {
    this.state = this.state === 'smaller' ? 'larger' : 'smaller';
  }
}
