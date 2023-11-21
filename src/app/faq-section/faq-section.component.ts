import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css', './../home-page/home-page.component.css']
})
export class FaqSectionComponent implements OnInit {
  
  faqControl = [false, false, false]

  constructor() { }

  ngOnInit(): void {
  }
  // Abre link do wpp.web
  sendToWpp(){
    window.open('https://wa.me/5547997262363?text=Gostaria+de+saber+mais+sobre+a+DataJus+%3B%29')
  }
}
