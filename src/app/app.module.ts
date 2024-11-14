import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from './state/login.reducer';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './state/login.effects';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule, StoreModule.forRoot({ count: loginReducer }),
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    EffectsModule.forRoot(LoginEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
