import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { DrinksComponent } from './drinks/drinks.component'
import { FormsModule } from '@angular/forms';
import { DrinksFiterPipe } from './drinks/drinks-fiter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    DrinksFiterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
