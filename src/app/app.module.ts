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
import { FooterComponent } from './components/footer/footer.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HeroComponent,
    AboutUsComponent,
    FooterComponent,
    FaqSectionComponent,
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
