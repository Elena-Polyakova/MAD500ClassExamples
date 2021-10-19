import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-game-card',
  templateUrl: './video-game-card.component.html',
  styleUrls: ['./video-game-card.component.scss']
})
export class VideoGameCardComponent implements OnInit {

  @Input() videoGame: any;
  constructor() {
    // this.videoGame = {};
  }

  ngOnInit(): void {
  }

}

export interface VideoGame {
  title: string;
  genre: string;
  developer: string;
  rating?: number;
  consoles?: string[];
}