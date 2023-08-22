import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuState: boolean = false // comportamento do icone de menu
  window = window // parametro para pegar tamanho da tela
  showMenu: boolean = false // parametro para estado do menu pelo navbar
  
  @Output() routeEmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Abre link do wpp.web
  sendToWpp(){
    window.open('https://wa.me/5547997086040?text=Gostaria+de+saber+mais+sobre+a+DataJus+%3B%29')
  }
  
}
