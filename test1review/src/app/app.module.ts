import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoGameCardComponent } from './video-game-card/video-game-card.component';
import { VideoGameListComponent } from './video-game-list/video-game-list.component';
import { GamesOnCertainPlatformPipe } from './games-on-certain-platform.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VideoGameCardComponent,
    VideoGameListComponent,
    GamesOnCertainPlatformPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
