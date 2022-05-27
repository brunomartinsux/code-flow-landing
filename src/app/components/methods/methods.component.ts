import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {

  displayCarrouselState: number = 0
  paddingRight: any = 0
  screenWidth: number = 0;
  
  @Input() title: string = 'O processo de desenvolvimento';
  @Input() subtitle: string = 'Projetamos e desenvolvemos produtos digitais para empresas e startups.';
  @Input() cardData: any[] = [
    {title: 'Definição', text: 'Entendemos o contexto e o problema que se pretende desenvolver. Levantando premissas da solução e os resultados que se deseja alcançar.'},
    {title: 'Design', text: 'Prototipamos, validamos e definimos o melhor caminho para a solução. Dessa forma aprendemos mais rápido e evitamos riscos.'},
    {title: 'Desenvolvimento', text: 'Entregamos um produto simples e de fácil usabilidade. Da interface ao banco de dados, com segurança e rapidez. '},
    {title: 'Deploy', text: 'Participamos ativamente da sustentação e evolução contínua do produto. '},
    {title: 'Repetição', text: 'Evoluímos continuamente. Acompanhando métricas, mensurando impactos e aprendizados da solução.'}]

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?: any) {
          this.screenWidth = window.innerWidth;
    }

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth 
  }

  handleClick(type: 'left' | 'right'){
    console.log(this.paddingRight);
    
    if(type == 'left'){
      this.paddingRight = this.paddingRight - 1000
    } else {
      this.paddingRight = this.paddingRight + 1000
    }
  }


}
