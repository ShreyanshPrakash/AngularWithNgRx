import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent,
  NavigationComponent,
  SubNavigationComponent,
  ErrorComponent
 } from './';
import { rootReducer } from './store/root.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SubNavigationComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { state: rootReducer }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
