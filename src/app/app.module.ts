import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassNamesComponent } from '../components/class-names/class-names.component';
import { AddNamesComponent } from '../components/add-names/add-names.component';
import { DisplayNamesComponent } from '../components/display-names/display-names.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassNamesComponent,
    AddNamesComponent,
    DisplayNamesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
