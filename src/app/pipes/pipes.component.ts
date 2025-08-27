import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name = "Dhruv"
  date = new Date();
  friends = ["Mayur", "Paul", "Meet"]
  searchTerm: string = "";
  friendsArray = new FormArray<FormControl>([]);
  friendsGroup = new FormGroup({});
  alreadyClicked: boolean = false;
  data = new Promise((res, rej) => {

    setTimeout(() => {
      res("Data recieved")
    }, 2000)

  })

  addFriend() {
    if (this.alreadyClicked) {
      this.addFriendsInList()
    }
    this.friendsArray.push(new FormControl('', Validators.required))
    this.alreadyClicked = true;
  }

  addFriendsInList() {
    for (let control of this.friendsArray.controls) {
      this.friends.push(control.value.trim())
    }

    console.log(this.friends)
  }
}
