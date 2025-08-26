import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],

})
export class ReactiveFormsComponent implements OnInit {
  signupForm!: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      personalinfo: new FormGroup(
        {
          address: new FormControl('', [Validators.minLength(5), Validators.required]),
          phone: new FormControl('', [Validators.minLength(10), Validators.required])
        }
      ),
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18)
      ]),
      hobbies: new FormArray([])
    })


  }

  onSubmit() {
    console.log(this.signupForm)
  }
  addHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl('', Validators.required)
    )
  }

  get hobbies(): FormArray {
    return this.signupForm.get('hobbies') as FormArray;
  }

}