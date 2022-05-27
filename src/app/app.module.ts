import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { PipesModule } from './pipes/pipes.module';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MethodsComponent } from './components/methods/methods.component';
import { ServicesComponentComponent } from './components/services-component/services-component.component';
import { TeamComponent } from './components/team/team.component';
import { CtaComponentComponent } from './components/cta-component/cta-component.component';
import { FooterComponent } from './components/footer/footer.component';
import { InvitePageComponent } from './invite-page/invite-page.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('./login-saga/login-saga.module').then((m) => m.LoginSagaModule)
  },
  {
    path:'invite',
    component: InvitePageComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HeroComponent,
    AboutUsComponent,
    MethodsComponent,
    ServicesComponentComponent,
    TeamComponent,
    CtaComponentComponent,
    FooterComponent,
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
