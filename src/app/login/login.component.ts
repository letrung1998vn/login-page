import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  accountForm= new FormControl({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  
}
