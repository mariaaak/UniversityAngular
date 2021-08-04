import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUniversitiesComponent } from './display-universities/display-universities.component';
import { InsertUniversityComponent } from './insert-university/insert-university.component';
import { DeleteUniversityComponent } from './delete-university/delete-university.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DisplayUniversitiesComponent,
    InsertUniversityComponent,
    DeleteUniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
