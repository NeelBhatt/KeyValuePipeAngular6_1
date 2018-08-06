import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    myValues = { "false": "value1", "true": "value2" };
       myObject: {[key: boolean]: string} = {true: 'I am two', false: 'I am one'};

      myArray = ["I am an array 1", "I am an array 2"]
       myMap = new Map([[2, 'I am two'], [1, 'I am one']]);
}
