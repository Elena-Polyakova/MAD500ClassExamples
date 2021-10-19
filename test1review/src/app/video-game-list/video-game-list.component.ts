import { Component, OnInit } from '@angular/core';
import { VideoGame } from '../video-game-card/video-game-card.component';

@Component({
  selector: 'app-video-game-list',
  templateUrl: './video-game-list.component.html',
  styleUrls: ['./video-game-list.component.scss']
})
export class VideoGameListComponent implements OnInit {
  videoGames: VideoGame[];
  constructor() {
    this.videoGames = [{
      title: "Halo",
      genre: "FPS",
      developer: "Bungie",
      rating: 10,
      consoles: ["PC", "XBOX Series X"]
    }, {
      title: "Metroid Dread",
      genre: "Metroidvania",
      developer: "Nintendo",
      consoles: ["Switch"]
    }, {
      title: "Hades",
      genre: "Rogue lite",
      developer: "Supergiant Games",
      rating: 11,
      consoles: ["Switch", "PC", "XBOX", "PS5", "PS4"]
    }];
  }

  ngOnInit(): void {
  }

  addGame(game: string): void {
    console.log("before", this.videoGames);
    this.videoGames.push({
      title: game,
      genre: "FPS",
      developer: "Activision Blizzard",
      rating: 1,
      consoles: ["PC", "XBOX Series X"]
    });
    this.videoGames = [...this.videoGames];
    console.log("after", this.videoGames);
  }
}
