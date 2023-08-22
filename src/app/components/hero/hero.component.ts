import { Component, Input, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() title: string = 'Soluções inteligentes para administração e redução do passivo tributário.';
  @Input() subtitle: string = 'Prestamos nossos serviços de forma totalmente virtual e disponibilizamos de meios de controle e monitoramento de débitos ajuizados.';
  @Input() buttonStyle: {text: string, icon: string} = {text: 'Falar com um consultor', icon: 'fa-arrow-right'}
  
  constructor() { }

  ngOnInit(): void {
      particlesJS.load('particles-js', 'assets/particles.json', null);
  }

  // Abre link do wpp.web
  sendToWpp(){
    window.open('https://wa.me/5547997086040?text=Gostaria+de+conhecer+mais+sobre+a+DataJus+%3B%29')
  }
}
