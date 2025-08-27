import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
          phone: new FormControl('', [Validators.minLength(10), Validators.required]),
          email: new FormControl('', [Validators.required, Validators.email], [this.isValidEmail.bind(this)]),
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

  removeHobby(index: number) {
    (this.signupForm.get('hobbies') as FormArray).removeAt(index)
  }

  // isValidEmail(formControl: AbortController): Promise<any> | Observable<any> {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       if (formControl.value === "dburada367@rku.ac.in") {
  //         rej({ forbiddenEmail: true });
  //       }
  //       res(null)
  //     }, 1000)
  //   })
  // }

  isValidEmail(formControl: AbstractControl): Promise<ValidationErrors | null> {
    console.log("Form Control", formControl)
    return new Promise((resolve) => {
      setTimeout(() => {
        if (formControl.value === 'dburada367@rku.ac.in') {
          resolve({ forbiddenEmail: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  resetForm() {
    this.signupForm.reset()
    console.log(this.signupForm)
  }
}

