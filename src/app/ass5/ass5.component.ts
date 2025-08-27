import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-ass5',
  templateUrl: './ass5.component.html',
  styleUrls: ['./ass5.component.css']
})
export class Ass5Component implements OnInit {

  projectForm!: FormGroup;
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projName: new FormControl('', [Validators.required, this.NameValidator]),
      mail: new FormControl('', [Validators.required, Validators.email,]),
      status: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.projectForm)
    console.log("Form Submitted")

  }

  NameValidator(formControl: AbstractControl): null | ValidationErrors {

    if (formControl.value === "Test") {
      return { wrongName: true }
    }
    else {
      return null;
    }
  }

}
