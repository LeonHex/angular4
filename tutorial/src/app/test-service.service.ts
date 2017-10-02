import { Injectable } from '@angular/core';

@Injectable()
export class TestServiceService {

  constructor() { }

  obj = {
    id: 1,
    name: 'hex',
    sex: 'male'
  };

  updateObj() {
    this.obj.id++;
  }

  success() {
    return 'what the fxxk';
  }
}
