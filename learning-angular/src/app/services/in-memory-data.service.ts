import { MarvelHero } from 'helper-files/MarvelHero';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const bananas: MarvelHero[] = [{
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
      name: "Wanda",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
      description: "Fancy magic powers",
      showOnList: true,
    },
    {
      id: 3,
      name: "Black Panther",
      imageURL: "https://m.media-amazon.com/images/I/71lVAGaqBtL._AC_SL1000_.jpg",
      description: "We will miss him",
      showOnList: true
    }];

    return { bananas };
  }

  genId(content: MarvelHero[]): number {
    return content.length ? Math.max(...content.map(contentItem => contentItem.id ?? 0)) + 1 : 0;
  }
}
