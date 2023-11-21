import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleRouter(event: string){
    let el: HTMLElement = document.getElementById(event) as HTMLElement

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  sendToWpp(){
    window.open('https://wa.me/5547997262363?text=Gostaria+de+saber+mais+sobre+a+DataJus+%3B%29')
  }

}
