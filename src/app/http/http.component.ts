import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { Data } from '@angular/router';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  constructor(private httpService: HttpService) { }
  userForm!: FormGroup;
  error!: string;
  userData!: Data[];
  ngOnInit() {
    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl('')
    })
    this.fetchData();

  }
  submitForm() {
    this.httpService.sendData(this.userForm.value).subscribe(() => {
      this.userData.push(this.userForm.value)
      this.userForm.reset()
    }, (err) => this.error = err.message)

  }

  fetchData() {
    this.httpService.getData().subscribe({
      next: data => {
        this.userData = data
      },
      error: (error) => {
        this.error = error.message
      }
    }
    )
  }

  clearData() {
    this.httpService.clearData().subscribe(() => {
      this.userData = []
    }, (err) => this.error = err.message)
  }

  deleteUser(id: string) {
    this.httpService.deleteUser(id).subscribe(() => { this.userData = this.userData.filter((data: Data) => data["id"] !== id) }, (err) => this.error = err.message)
  }

}
