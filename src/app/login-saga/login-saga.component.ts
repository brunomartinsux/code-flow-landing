import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-saga',
  templateUrl: './login-saga.component.html',
  styleUrls: ['./login-saga.component.css']
})
export class LoginSagaComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  doLogin(){
    this._router.navigate([('/')])
  }

}
