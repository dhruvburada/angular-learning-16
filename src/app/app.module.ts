import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { InputComponent } from './greet/input/input.component';

import { ass3 } from './ass3/ass-3.component';
import { Ass4Component } from './ass4/ass4.component';
import { EvenComponent } from './ass4/even/even.component';
import { OddComponent } from './ass4/odd/odd.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormHandlingComponent } from './form-handling/form-handling.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    InputComponent,
    ass3,
    Ass4Component,
    EvenComponent,
    OddComponent,
    ObservablesComponent,
    FormHandlingComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
