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

}
