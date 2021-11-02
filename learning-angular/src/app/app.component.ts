import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContentList } from 'helper-files/ContentList';
import { MarvelHero } from 'helper-files/MarvelHero';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = "learning-angular";
  public enzo: any;
  public dot: any;
  public today = new Date();
  contentList: MarvelHero[] = [];

  public constructor(private contentService: ContentService) {
    this.enzo = "enzo matrix";
    this.dot = "dot matrix";
  }

  public ngOnInit(): void {
    // this.contentList = this.contentService.getContent();
    this.contentService.getContentObs().subscribe(
      contentList =>
        this.contentList = contentList
    );
  }

  triggerAlertBob(): void {
    setTimeout(() => console.log("Update bob"), 0);
  }

  triggerAlertEnzo(): void {
    console.log("enzos old value is: ", this.enzo);
    this.enzo = "enzo matrix reset";
  }

  triggerAlertDot(): void {
    console.log("show dots value", this.dot);
    this.dot = "Changed cause of the button";

    this.contentList.push({
      id: 4,
      name: "Wanda",
      imageURL: "https://m.media-amazon.com/images/I/71lVAGaqBtL._AC_SL1000_.jpg",
      description: "Super powerful",
      showOnList: true
    })
    this.contentList = [...this.contentList];
    console.log(this.contentList);
  }

}