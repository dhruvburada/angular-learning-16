import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  constructor(private httpService: HttpService) { }
  userForm!: FormGroup;
  error!: string;
  ngOnInit() {
    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl('')
    })

    this.httpService.getData().subscribe({
      next: data => {
        console.log(data)
      },
      error: (error) => {
        this.error = error.message
      }
    }
    )
  }
  submitForm() {
    console.log(this.userForm.value)
    this.httpService.sendData(this.userForm.value).subscribe((resData) => {
      console.log(resData)
    })
  }

}
