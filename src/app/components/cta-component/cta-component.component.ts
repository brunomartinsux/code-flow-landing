import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-component',
  templateUrl: './cta-component.component.html',
  styleUrls: ['./cta-component.component.css']
})
export class CtaComponentComponent implements OnInit {

  @Input() title: string = 'Precisando de ajuda para construir seu produto digital?';
  @Input() buttonStyle: {text: string, icon: string} = {text: 'Entre em contato', icon: 'fa-arrow-right'}

  constructor() { }

  ngOnInit(): void {
  }

}
