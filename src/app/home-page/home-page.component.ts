import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faqControl = [false, false, false]


  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

  handleRouter(event: string){
    let el: HTMLElement = document.getElementById(event) as HTMLElement
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  sendToWpp(){
    window.open('https://wa.me/5547997086040?text=Gostaria+de+saber+mais+sobre+a+DataJus+%3B%29')
  }

}
