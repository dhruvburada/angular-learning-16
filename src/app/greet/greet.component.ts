import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  name: string = "Unknown"
  containsName: boolean = false;
  isDhruv: boolean = false;
  greetUser(name: string) {
    this.containsName = name.trim().length > 0;
    this.name = name;
  }

  getColor() {
    if (this.name === "Dhruv") {
      this.isDhruv = true
      return "lightblue"
    }
    return "lightgreen"
  }


}
