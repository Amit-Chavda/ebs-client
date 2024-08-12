import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { CarouselModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
