import { BrowserModule } from '@angular/platform-browser';//*
import { NgModule} from '@angular/core';//*

import{FormsModule} from '@angular/forms'//*
import { AppRoutingModule } from './app-routing.module';//*
import { AppComponent } from './app.component';//*

import { StudentsComponent } from './components/students/students.component';//*
import {StudentServiceService } from "./services/student-service.service";//*
import {HttpClientModule} from "@angular/common/http";//*


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
