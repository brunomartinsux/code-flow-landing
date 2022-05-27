import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  displayCarrouselState: number = 0
  cards = [
    {text: '“Somos movidos pelo propósito de impactar positivamente pessoas, comunidades e negócios por meio da tecnologia.”', img: 'assets/team-img.svg', name: 'Bruno Luis Martins', role: 'Desenvolvedor Front-End'},
    {text: '“Somos movidos pelo propósito de impactar positivamente pessoas.”', img: 'assets/team-img.svg', name: 'Larissa Kamers', role: 'Designer UX/UI'},
    {text: '“Somos movidos pelo propósito de impactar positivamente pessoas, comunidades e negócios por meio da tecnologia. movidos pelo propósito de impactar positivamente pessoas, ”', img: 'assets/team-img.svg', name: 'Ramon Galdino', role: 'Desenvolvedor Mobile'},
    {text: '“Somos movidos pelo propósito de impactar positivamente pessoas, comunidades e negócios por meio da tecnologia.”', img: 'assets/team-img.svg', name: 'Leonardo Lopes', role: 'Desenvolvedor Full-Stack'},
    {text: '“Somos movidos pelo propósito de impactar positivamente pessoas, comunidades e negócios por meio da tecnologia.”', img: 'assets/team-img.svg', name: 'João Gonzales', role: 'Product Owner'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(type: 'left' | 'right'){
    if(type == 'left'){
      if(this.displayCarrouselState > 0)
      this.displayCarrouselState--
    } else {
      if(this.displayCarrouselState < this.cards.length - 1)
      this.displayCarrouselState++
    }
  }

}
