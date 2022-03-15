import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http'
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { PipesModule } from './pipes/pipes.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        component: TableComponent
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login-saga/login-saga.module').then((m) => m.LoginSagaModule)
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxMaskModule.forRoot(),
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
