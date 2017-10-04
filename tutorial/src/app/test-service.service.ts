import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TestServiceService {

  constructor(private http: Http) { }

  obj = {
    id: 1,
    name: 'hex',
    sex: 'male'
  };

  fetchData() {
    console.log('fetching new data......');
    this.http.get('app/data/mock-user.json').map(
      response => response.json()
    ).subscribe(
      data => console.log(data)
    );
  }

  updateObj() {
    this.obj.id++;
  }

  success() {
    return 'what the fxxk';
  }
}
