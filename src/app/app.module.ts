import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
