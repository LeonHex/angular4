import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myName = 'Guang Yang';

  changeName = function(value){
    this.myName = "Na Li";
    console.log(value.target.id);
  }
}
