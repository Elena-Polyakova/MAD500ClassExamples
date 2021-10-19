import { Pipe, PipeTransform } from '@angular/core';
import { VideoGame } from './video-game-card/video-game-card.component';

@Pipe({
  name: 'gamesOnCertainPlatform'
})
export class GamesOnCertainPlatformPipe implements PipeTransform {

  transform(games: VideoGame[], system?: string): VideoGame[] {
    // if (!system) {
    //   system = "PC";
    // }
    return games.filter(game =>
      game.consoles?.find(console =>
        console === (system || "PC")
      )
    );
  }

}
