import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  public isLoading = true;
  newContentItem: MarvelHero = {
    name: "Hawkeye",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    description: "pew pew arrows",
    currentLocation: "Iowa",
    showOnList: true
  };
  contentList: MarvelHero[] = [];

  public constructor(private contentService: ContentService) {
    this.enzo = "enzo matrix";
    this.dot = "dot matrix";
  }

  public ngOnInit(): void {
    // this.contentList = this.contentService.getContent();
    this.contentService.getContent().subscribe(
      contentList => {
        this.isLoading = false;
        this.contentList = contentList
      }
    );
  }
  save(): void {
    console.log("add initiated", this.newContentItem);
    this.contentService.addContent(this.newContentItem).subscribe(content => {
      console.log(content);
      this.contentList.push(content);
      this.contentList = [...this.contentList];
    });
  }
  update(): void {
    this.contentList[this.newContentItem.id || 0] = this.newContentItem; //we update the content ourselves

    this.contentService.updateContent(this.newContentItem).subscribe(() => {
      console.log("Content updated:");
    });
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