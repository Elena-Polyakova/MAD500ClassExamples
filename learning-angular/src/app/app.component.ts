import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContentList } from 'helper-files/ContentList';
import { MarvelHero } from 'helper-files/MarvelHero';

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
  contentList: MarvelHero[] = [{
    id: 0,
    name: "Spiderman",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    description: "Obviously the best marvel hero",
    currentLocation: "Queens",
    showOnList: true
  },
  {
    id: 1,
    name: "Ironman",
    imageURL: "https://m.media-amazon.com/images/I/71lVAGaqBtL._AC_SL1000_.jpg",
    description: "We will miss him",
    currentLocation: 'California',
    showOnList: false
  },
  {
    id: 2,
    name: "Spiderman",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    description: "Obviously the best marvel hero",
    showOnList: false
  },
  {
    id: 3,
    name: "Ironman",
    imageURL: "https://m.media-amazon.com/images/I/71lVAGaqBtL._AC_SL1000_.jpg",
    description: "We will miss him",
    showOnList: true
  }];

  public constructor() {
    this.enzo = "enzo matrix";
    this.dot = "dot matrix";
  }

  public ngOnInit(): void {
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