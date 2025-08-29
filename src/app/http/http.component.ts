import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpService } from './http.service';
import { Data } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  constructor(private httpService: HttpService) { }
  userForm!: FormGroup;
  error = new Subject<string>();
  errorMessage: null | string = null;
  userData!: Data[];
  errorSubscription!: Subscription;
  ngOnInit() {
    this.userForm = new FormGroup({
      'name': new FormControl(''),
      'email': new FormControl('')
    })

    this.fetchData();
    this.errorSubscription = this.error.subscribe((err) => {
      this.errorMessage = err
    })

  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe()
  }
  submitForm() {
    this.httpService.sendData(this.userForm.value).subscribe(() => {
      this.userData.push(this.userForm.value)
      this.userForm.reset()
    }, (err) => this.error.next(err.message))

  }

  fetchData() {
    this.httpService.getData().subscribe({
      next: data => {
        this.userData = data
      },
      error: (err) => {
        this.error.next(err.message)
      }
    }
    )
  }

  clearData() {
    this.httpService.clearData().subscribe(() => {
      this.userData = []
    }, (err) => this.error.next(err.message))
  }

  deleteUser(id: string) {
    this.httpService.deleteUser(id).subscribe(() => { this.userData = this.userData.filter((data: Data) => data["id"] !== id) }, (err) => this.error.next(err.message))
  }

}
