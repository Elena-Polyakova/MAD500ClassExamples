import { Component } from '@angular/core';
import {LogUpdateService} from "./log-update.service";
import {ContentServiceService} from "./services/content-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MusicSite';

  constructor(private contentService: ContentServiceService, private logService: LogUpdateService) { }
}
