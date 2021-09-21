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
  contentList: MarvelHero[] = [{
    id: 0,
    name: "Spiderman",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    description: "Obviously the best marvel hero"
  },
  {
    id: 0,
    name: "Ironman",
    imageURL: "https://m.media-amazon.com/images/I/71lVAGaqBtL._AC_SL1000_.jpg",
    description: "We will miss him"
  },
  {
    id: 0,
    name: "Spiderman",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    description: "Obviously the best marvel hero"
  },
  {
    id: 0,
    name: "Ironman",
    imageURL: "https://m.media-amazon.com/images/I/71lVAGaqBtL._AC_SL1000_.jpg",
    description: "We will miss him"
  }];

  public constructor() {

  }

  public ngOnInit(): void {
  };
}