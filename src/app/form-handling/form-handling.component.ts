import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-handling',
  templateUrl: './form-handling.component.html',
  styleUrls: ['./form-handling.component.css']
})
export class FormHandlingComponent {
  onSubmit(form: any) {
    console.log(form)
  }

  name!: string;
  age!: number;
  email!: string;
  @ViewChild('formref') form!: NgForm;


  loadDefaults() {
    console.log(this.form)
    //must suply all the form fields
    // this.form.setValue({
    //   name: "Dhruv",
    //   age: 18,
    //   mail: "dburada@gmail.com",
    //   locationInfo: {
    //     country: "India",
    //     state: "Gujarat",
    //   }
    // })

    this.form.form.patchValue({
      locationInfo: {
        country: "India",
        state: "Gujarat",
      }
    })
  }
}
