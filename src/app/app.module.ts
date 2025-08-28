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
import { Ass5Component } from './ass5/ass5.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { CutdataPipe } from './pipes/cutdata.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';

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
    ReactiveFormsComponent,
    Ass5Component,
    PipesComponent,
    TitleCasePipe,
    CutdataPipe,
    SearchPipe,
    SortPipe,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
