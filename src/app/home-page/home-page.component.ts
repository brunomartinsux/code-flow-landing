import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faqControl = [false, false, false]


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

}
