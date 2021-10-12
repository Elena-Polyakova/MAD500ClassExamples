import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-game-card/video-game-card.component';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.scss']
})
export class VideoGameListComponent implements OnInit {
  videoGame1: VideoGame;
  videoGame2: VideoGame;
  videoGame3: VideoGame;
  constructor() {
    this.videoGame1 = {
      title: "Halo",
      genre: "FPS",
      developer: "Bungie",
      rating: 10,
      consoles: ["PC", "XBOX Series X"]
    };
    this.videoGame2 = {
      title: "Metroid Dread",
      genre: "Metroidvania",
      developer: "Nintendo",
      consoles: ["Switch"]
    }
    this.videoGame3 = {
      title: "Hades",
      genre: "Rogue lite",
      developer: "Supergiant Games",
      rating: 11,
      consoles: ["Switch", "PC", "XBOX", "PS5", "PS4"]
    }
  }

  ngOnInit(): void {
  }

}
