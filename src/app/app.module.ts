import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivePatternComponent } from './reactive-pattern/reactive-pattern.component';
import { ImperativePatternComponent } from './imperative-pattern/imperative-pattern.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivePatternComponent,
    ImperativePatternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
