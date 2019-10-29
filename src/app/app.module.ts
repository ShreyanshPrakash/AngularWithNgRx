import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent,
  NavigationComponent,
  SubNavigationComponent,
  ErrorComponent
 } from './';
import { rootReducer } from './store/root.reducer';
import { RootEffects } from './store/root.effects';


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
    HttpClientModule,
    StoreModule.forRoot(
      { state: rootReducer }
    ),
    EffectsModule.forRoot( [ RootEffects ] )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
