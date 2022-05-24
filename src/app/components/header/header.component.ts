import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuState: boolean = false // comportamento do icone de menu

  constructor() { }

  ngOnInit(): void {
  }

  submitSearch(event: string){
    console.log(event);
    
  }

}
