import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() routeEmitter: EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  
  // Abre link do wpp.web
  sendToWpp(){
    window.open('https://wa.me/5547988724280?text=Gostaria+de+conhecer+mais+sobre+a+Code.Flow+%3B%29')
  }

}
