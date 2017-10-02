import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  convertorForm;
  b = 0;
  o = 0;
  h = 0;
  testS: TestServiceService = null;

  constructor(private ser: TestServiceService) {
    this.testS = ser;
  }

  ngOnInit() {
    this.convertorForm = new FormGroup({
      decimal: new FormControl('', Validators.required),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexa: new FormControl(''),
    });
    this.testS.updateObj();
  }

  decimalChanged(oldValue, newValue) {
    if ( newValue !== '') {
      this.convertorForm.patchValue({
        binary: parseInt(newValue, 10).toString(2)
      });
      this.convertorForm.patchValue({
        octal: parseInt(newValue, 10).toString(8)
      });
      this.convertorForm.patchValue({
        hexa: parseInt(newValue, 10).toString(16)
      });
    }else {
      this.convertorForm.patchValue({
        binary: ''
      });
      this.convertorForm.patchValue({
        octal: ''
      });
      this.convertorForm.patchValue({
        hexa: ''
      });
    }
  }

  binaryChanged(oldValue, newValue) {
    this.b += 1;
    console.log(this.b);
    if (this.b === 1) {
      if ( newValue !== '') {
        this.convertorForm.patchValue({
          decimal: parseInt(newValue, 2).toString(10)
        });
      }else {
        this.convertorForm.patchValue({
          decimal: ''
        });
      }
      this.b = 0;
    }
  }

  octalChanged(oldValue, newValue) {
    this.o += 1;
    console.log(this.o);
    if (this.o === 1) {
      if ( newValue !== '') {
        this.convertorForm.patchValue({
          decimal: parseInt(newValue, 8).toString(10)
        });
      }else {
        this.convertorForm.patchValue({
          decimal: ''
        });
      }
      this.o = 0;
    }
  }

  hexaChanged(oldValue, newValue) {
    this.h += 1;
    console.log(this.h);
    if (this.h === 1) {
      if ( newValue !== '') {
        this.convertorForm.patchValue({
          decimal: parseInt(newValue, 16).toString(10)
        });
      }else {
        this.convertorForm.patchValue({
          decimal: ''
        });
      }
      this.h = 0;
    }
  }
}
