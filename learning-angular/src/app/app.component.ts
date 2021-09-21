import { Component } from '@angular/core';
import { ContentList } from 'helper-files/ContentList';
import { MarvelHero } from 'helper-files/MarvelHero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = "learning-angular";


  public ngOnInit(): void {

    let name: string;
    name = "peter";
    console.log("Name is", name);

    let contentItem: MarvelHero = {
      id: 0,
      name: "Spiderman",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
      description: "Obviously the best marvel hero"
    };
    this.processHero(contentItem);

    // ContentList.contentCount = 1;
    let list: ContentList;
    list = new ContentList(contentItem);
    list.items = [{
      id: 0,
      name: "Ironman",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
      description: "We will miss him"
    }];
    console.log("We changed the hero on the inside", list.items);

  };
  public processHero(hero: MarvelHero): void {
    console.log(hero.description);
  }
}