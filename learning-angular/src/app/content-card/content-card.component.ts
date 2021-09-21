import { Component, Input, OnInit } from '@angular/core';
import { MarvelHero } from 'helper-files/MarvelHero';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: any;
  constructor() {

  }

  ngOnInit(): void {
  }

}
