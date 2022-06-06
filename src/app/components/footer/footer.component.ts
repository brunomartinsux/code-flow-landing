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

}
