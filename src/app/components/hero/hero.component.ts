import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() title: string = 'Lorem ipsum dolor sit amet consectetur ';
  @Input() subtitle: string = 'Projetamos e desenvolvemos produtos digitais para empresas e startups.';
  @Input() buttonStyle: {text: string, icon: string} = {text: 'Quero um Orçamento', icon: 'fa-arrow-right'}

  constructor() { }

  ngOnInit(): void {
  }

  // Abre link do wpp.web
  sendToWpp(){
    window.open('https://wa.me/5547988724280?text=Gostaria+de+conhecer+mais+sobre+a+Code.Flow+%3B%29')
  }
}
