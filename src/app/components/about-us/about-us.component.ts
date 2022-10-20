import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  @Input() title: string = 'Especialista em tributos e engenharia de dados.';
  @Input() subtitle: string = 'Contamos com a parceria e apoio de um escritório de advocacia especializado na área de direito tributário.';
  
  constructor() { }

  ngOnInit(): void {
  }

}
