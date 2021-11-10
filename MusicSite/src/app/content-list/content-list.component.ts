import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentServiceService } from '../services/content-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  message: string;
  musicList: Content[] = [];
  constructor(private contentService: ContentServiceService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(contentList => {
      this.musicList = contentList;
    });
  }

  checkIfTitleExists(title: string): void {
    //do my check if the title exists
    // console.log(title);

    // this.message = "Song not found";
    // for (let i = 0; i < this.musicList.length; i++) {
    //   if (this.musicList[i].title === title) {
    //     this.message = "Found your song!";
    //     break;
    //   }
    // }

    let filter = this.musicList.filter(song => song.title === title);
    if (filter.length > 0) {
      this.message = "Song found";
    }
    else {
      this.message = "No song found with that title";
    }
    console.log("spread operator", ...this.musicList);
    console.log("Just the array", this.musicList);
    this.musicList = [...this.musicList];

  }
}
