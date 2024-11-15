import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { loginReducer } from './state/login.reducer';
import { LoginEffects } from './state/login.effects';
import { appStore } from './state/login.seletor';
import { LoginService } from './state/login.service';
import { provideHttpClient  } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideStore(appStore), provideEffects(LoginEffects), provideState({name: 'Login', reducer: loginReducer}), 
    LoginService, provideHttpClient()]
};
