import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() routeEmitter: EventEmitter<string> = new EventEmitter()
  window = window // parametro para pegar tamanho da tela

  constructor() { }

  ngOnInit(): void {
  }
  
  // Abre link do wpp.web
  sendToWpp(){
    window.open('https://wa.me/5547997262363?text=Gostaria+de+saber+mais+sobre+a+DataJus+%3B%29')
  }

  goToBlog(){
    window.open('https://medium.com/@datajus.integra')
  }

}
