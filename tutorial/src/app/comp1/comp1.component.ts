import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  testVar = 'hex';
  form;
  testS;

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
  }

}
