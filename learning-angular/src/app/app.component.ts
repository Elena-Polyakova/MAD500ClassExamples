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
    name: "Wanda",
    imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    description: "Fancy magic powers",
    showOnList: true,
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

    console.log("First console log");
    setTimeout(function () {
      console.log("Second console log");
    }, 0);

    Promise.resolve().then(function () {
      console.log("Third console log");
    });
    Promise.resolve().then(function () {
      console.log("Fifth console log");
    });
    Promise.resolve().then(function () {
      console.log("Six console log");
    });
    console.log("Fourth console log");


    let ourPromise = new Promise((success, fail) => {
      let testPass = false;
      if (testPass) {
        success("Success was achieved!");
      }
      else {
        fail("Failure :(");
      }
    });

    ourPromise.then(function (successResult) {
      console.log("This is totally the success method", successResult)
    }).catch(bananas => {
      console.log("Sad face, it failed", bananas)
    });


    let getStuff = async function () {
      return "stuff";
    }

    let getTheSameStuff = function () {
      return Promise.resolve("stuff");
    }

    //different way to represent functions
    let getAllTheStuff = async () => {
      const theFirstStuff = getStuff();
      const theSecondStuff = getTheSameStuff();
      //returns both promises
      return await Promise.all([theFirstStuff, theSecondStuff]);
    }

    console.log("get all the stuff", getAllTheStuff());
    // 1 3 4 2
    // 1 4 2 3
    // 1 2 3 4
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