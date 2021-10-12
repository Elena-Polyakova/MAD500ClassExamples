import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoGameCardComponent } from './video-game-card/video-game-card.component';
import { VideoGameListComponent } from './video-game-list/video-game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGameCardComponent,
    VideoGameListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
