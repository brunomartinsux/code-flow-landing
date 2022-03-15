import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginSagaComponent } from './login-saga.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginSagaComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'recover-password/:id',
    component: RecoverPasswordComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
]

@NgModule({
  declarations: [LoginSagaComponent, RegisterPageComponent,RecoverPasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class LoginSagaModule { }
