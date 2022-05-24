import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  @Input() title: string = 'Conheça nossas áreas de atuação';
  @Input() subtitle: string = 'Projetamos e desenvolvemos produtos digitais para empresas e startups.';
  @Input() cardData: any[] = [
    {title: 'Estratégia', text: 'Com nossa consultoria em estratégia de produtos e métodos ágeis, ajudamos a definir o produto que você deseja.', icon: 'fa-magnifying-glass'},
    {title: 'Design', text: 'Projetamos produtos digitais de forma a proporcionar a melhor experiência para seus usuários.', icon:'fa-pen-nib'},
    {title: 'Tecnologia', text: 'Da interface ao banco de dados, desenvolvemos a sua solução de ponta a ponta, colaborando para gerar resultados ao seu negócio.', icon: 'fa-tv'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
