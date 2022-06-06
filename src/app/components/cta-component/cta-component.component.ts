import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-component',
  templateUrl: './cta-component.component.html',
  styleUrls: ['./cta-component.component.css']
})
export class CtaComponentComponent implements OnInit {

  @Input() title: string = 'Precisando de ajuda para construir seu produto digital?';
  @Input() buttonStyle: {text: string, icon: string} = {text: 'Entre em contato', icon: 'fa-arrow-right'}

  constructor( private _router: Router) { }

  ngOnInit(): void {
  }

  // Abre link do wpp.web
  sendToWpp(){
    window.open('https://wa.me/5547988724280?text=Gostaria+de+conhecer+mais+sobre+a+Code.Flow+%3B%29')
  }

}
